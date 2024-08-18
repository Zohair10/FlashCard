export default function handler(req, res) {
    if (req.method === 'POST') {
        const { text } = req.body;

        if (!text) {
            return res.status(400).json({ error: 'Text is required to create a flashcard' });
        }

        const flashcard = {
            id: new Date().getTime(),
            content: text,
            createdAt: new Date()
        };

        // Respond with the flashcard object
        res.status(201).json(flashcard);
    } else {
        // Handle any other HTTP method
        res.status(404).json({ error: 'Not zohair' });
    }
}
