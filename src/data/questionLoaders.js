const loaders = import.meta.glob('./questions/*/*.js')

const keyFor = (subjectId, chapterId) => `./questions/${subjectId}/${Number(chapterId)}.js`

export async function loadChapterQuestions(subjectId, chapterId) {
  const loader = loaders[keyFor(subjectId, chapterId)]
  if (!loader) return []
  const module = await loader()
  return module.default || []
}

export async function loadQuestionsForChapters(chapters) {
  const entries = await Promise.all(
    chapters.map(async ({ subjectId, chapterId }) => ({
      subjectId,
      chapterId: Number(chapterId),
      questions: await loadChapterQuestions(subjectId, chapterId),
    }))
  )
  return entries
}

export async function searchQuestionBank(query, meta, limit = 8) {
  const needle = query.trim().toLowerCase()
  if (needle.length < 2) return []
  const matches = []
  const subjectEntries = Object.entries(meta)
  for (const [subjectId, subject] of subjectEntries) {
    for (const chapter of subject.chapters) {
      const questions = await loadChapterQuestions(subjectId, chapter.id)
      for (const question of questions) {
        const haystack = [question.question, ...(question.options || []), question.explanation || ''].join(' ').toLowerCase()
        if (!haystack.includes(needle)) continue
        matches.push({
          type: 'question',
          subjectId,
          chapterId: chapter.id,
          subjectName: subject.name,
          chapterName: chapter.name,
          title: question.question,
          description: chapter.name,
        })
        if (matches.length >= limit) return matches
      }
    }
  }
  return matches
}
