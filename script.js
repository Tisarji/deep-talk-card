function generateRandomQuestion() {
	const deepQuestions = [
		"What is the meaning of life?",
		"Is reality subjective or objective?",
		"What is the nature of consciousness?",
		"Can machines ever achieve true intelligence?",
		"How does one find purpose and fulfillment?",
		"What is the origin of the universe?",
		"Is time an illusion?",
		"What is the nature of good and evil?",
		"Can we ever truly understand the mind of another?",
		"What is the role of randomness in the universe?"
	];

	const randomIndex = Math.floor(Math.random() * deepQuestions.length);
	document.getElementById('question').textContent = 'Deep Question: ' + deepQuestions[randomIndex];
}
