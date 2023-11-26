
const apiKey = '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';
const OpenAI = require('openai');

const openai = new OpenAI({
    apiKey: apiKey,
  });

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{"role": "system", "content": ""},
        {"role": "user", "content": "How Many People On This Fucking earth"}],
    model: "gpt-3.5-turbo",
  },
  {
    max_tokens: 60,
  },

  
  );

  console.log(completion.choices[0]);
}
main();

