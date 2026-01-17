
import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} from "@google/generative-ai";


const MODEL = "gemini-1.0-pro";
const API_KEY = import.meta.env.GEMINI_API;

async function runChat(promt){
    const genAI = new GoogleGenerativeAI(API_KEY);

    const model = genAI.getGenerativeModel({model: MODEL});

    const generationConfig = {
        temperature: 0.9,
        topK:1,
        topP:1,
        maxOutputTokens: 2048,
    };

    const safetySettings = [
        {
            category: HarmCategory.HARM_CATEGORY_HARASSMENT,
            blockThreshold: HarmBlockThreshold.HARM_BLOCK_THRESHOLD_BLOCK,
        },
        {
            category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
            blockThreshold: HarmBlockThreshold.HARM_BLOCK_THRESHOLD_BLOCK,
        },
        {
            category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
            blockThreshold: HarmBlockThreshold.HARM_BLOCK_THRESHOLD_BLOCK,
        },
        {
            category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
            blockThreshold: HarmBlockThreshold.HARM_BLOCK_THRESHOLD_BLOCK,
        },
    ];

    const chat = model.startChat({
        generationConfig,
        safetySettings,
        history: [],
    });

    const result = await chat.sendMessage(promt);
    const response = result.response;
    console.log(response.text);
}

export default runChat;