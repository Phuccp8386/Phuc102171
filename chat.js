// Chat with Gemini API - Tái sử dụng cho chat.html
let apiKey = (window.APP_CONFIG && window.APP_CONFIG.GEMINI_API_KEY) ? window.APP_CONFIG.GEMINI_API_KEY : '';

const MODEL_ID = 'gemini-2.0-flash-exp';

// Knowledge base fallback (khi không có API key)
const knowledgeBase = [
    { keywords: ["sinh năm", "sinh ngày", "năm sinh", "1890"], answer: "Chủ tịch Hồ Chí Minh sinh ngày 19 tháng 5 năm 1890 tại làng Hoàng Trù, xã Kim Liên, huyện Nam Đàn, tỉnh Nghệ An." },
    { keywords: ["tên khai sinh", "tên thật", "nguyễn sinh cung"], answer: "Tên khai sinh của Người là Nguyễn Sinh Cung. Người còn có nhiều bí danh khác như Nguyễn Ái Quốc, Hồ Chí Minh." },
    { keywords: ["tìm đường cứu nước", "bến nhà rồng", "1911", "ra đi"], answer: "Ngày 5 tháng 6 năm 1911, Người rời Bến cảng Nhà Rồng (Sài Gòn) bắt đầu cuộc hành trình 30 năm tìm đường cứu nước, đi qua nhiều quốc gia trên thế giới như Pháp, Anh, Mỹ, Liên Xô, Trung Quốc." },
    { keywords: ["đảng cộng sản", "thành lập đảng", "1930"], answer: "Ngày 3 tháng 2 năm 1930, Người chủ trì Hội nghị hợp nhất các tổ chức cộng sản, thành lập Đảng Cộng sản Việt Nam, một bước ngoặt vĩ đại của cách mạng Việt Nam." },
    { keywords: ["tuyên ngôn độc lập", "2/9/1945", "ba đình", "độc lập"], answer: "Ngày 2 tháng 9 năm 1945, Người đọc Tuyên ngôn Độc lập tại Quảng trường Ba Đình, Hà Nội, khai sinh nước Việt Nam Dân chủ Cộng hòa - Nhà nước dân chủ nhân dân đầu tiên ở Đông Nam Á." },
    { keywords: ["mất", "qua đời", "1969"], answer: "Ngày 2 tháng 9 năm 1969, Chủ tịch Hồ Chí Minh qua đời tại Hà Nội, để lại niềm tiếc thương vô hạn cho toàn dân tộc Việt Nam và bạn bè quốc tế." },
    { keywords: ["tư tưởng", "tư tưởng hồ chí minh"], answer: "Tư tưởng Hồ Chí Minh là hệ thống quan điểm toàn diện về cách mạng Việt Nam, bao gồm: độc lập dân tộc gắn liền với chủ nghĩa xã hội, sức mạnh của nhân dân và khối đại đoàn kết toàn dân tộc, quyền làm chủ của nhân dân, xây dựng Nhà nước của dân, do dân, vì dân, và đạo đức cách mạng: Cần, Kiệm, Liêm, Chính, Chí công vô tư." },
    { keywords: ["câu nói", "câu nổi tiếng", "châm ngôn"], answer: 'Một số câu nói nổi tiếng của Bác Hồ: "Không có gì quý hơn độc lập, tự do.", "Đoàn kết, đoàn kết, đại đoàn kết. Thành công, thành công, đại thành công.", "Cần, Kiệm, Liêm, Chính, Chí công vô tư.", "Muốn xây dựng chủ nghĩa xã hội, trước hết phải có người xã hội chủ nghĩa.", "Học hỏi là một việc phải tiếp tục suốt đời."' },
    { keywords: ["di sản", "unesco", "vinh danh"], answer: "Năm 1987, UNESCO đã ra Nghị quyết 24C/18.65 vinh danh Hồ Chí Minh là 'Anh hùng giải phóng dân tộc và Nhà văn hóa kiệt xuất của Việt Nam'. Người để lại di sản vĩ đại về tư tưởng, đạo đức, phong cách và văn hóa." },
    { keywords: ["nghệ an", "kim liên", "quê quán"], answer: "Chủ tịch Hồ Chí Minh sinh tại làng Hoàng Trù, xã Kim Liên, huyện Nam Đàn, tỉnh Nghệ An - một vùng đất có truyền thống cách mạng lâu đời, nơi sản sinh ra nhiều nhà cách mạng kiệt xuất." },
    { keywords: ["kháng chiến", "chống pháp", "chống mỹ"], answer: "Người lãnh đạo nhân dân Việt Nam tiến hành hai cuộc kháng chiến trường kỳ: chống thực dân Pháp (1946-1954) và chống đế quốc Mỹ (1954-1975), giành thắng lợi vẻ vang, bảo vệ nền độc lập dân tộc." },
    { keywords: ["đạo đức", "cần kiệm liêm chính"], answer: "Đạo đức cách mạng theo tư tưởng Hồ Chí Minh là: Cần (siêng năng, chăm chỉ), Kiệm (tiết kiệm), Liêm (liêm khiết, trong sạch), Chính (chính trực, ngay thẳng), Chí công vô tư (hết lòng vì dân, vì nước, không vì lợi ích cá nhân)." },
    { keywords: ["gia đình", "cha mẹ", "anh chị"], answer: "Cha của Người là Nguyễn Sinh Sắc (cụ Phó bảng), mẹ là Hoàng Thị Loan. Người có hai anh chị em: Nguyễn Thị Thanh (chị gái) và Nguyễn Sinh Khiêm (anh trai). Cả gia đình đều có tinh thần yêu nước và cách mạng." },
    { keywords: ["học tập", "học hỏi", "giáo dục"], answer: 'Bác Hồ rất coi trọng việc học tập và giáo dục. Người nói: "Học hỏi là một việc phải tiếp tục suốt đời.", "Vì lợi ích mười năm thì phải trồng cây, vì lợi ích trăm năm thì phải trồng người."' }
];

// Fallback response function (khi không có API key)
function getFallbackResponse(question) {
    const lowerQuestion = question.toLowerCase();
    
    // Tìm kiếm trong knowledge base
    for (const item of knowledgeBase) {
        for (const keyword of item.keywords) {
            if (lowerQuestion.includes(keyword)) {
                return item.answer;
            }
        }
    }
    
    // Câu trả lời mặc định
    if (lowerQuestion.includes('xin chào') || lowerQuestion.includes('hello') || lowerQuestion.includes('chào')) {
        return "Xin chào! Tôi có thể giúp bạn tìm hiểu về Chủ tịch Hồ Chí Minh. Bạn có thể hỏi về: cuộc đời, sự nghiệp, tư tưởng, câu nói nổi tiếng, hoặc bất kỳ điều gì về Người. Bạn muốn biết điều gì?";
    }
    
    if (lowerQuestion.includes('cảm ơn') || lowerQuestion.includes('thanks') || lowerQuestion.includes('thank')) {
        return "Không có gì! Tôi rất vui được giúp bạn tìm hiểu về Chủ tịch Hồ Chí Minh. Nếu bạn có thêm câu hỏi, hãy cứ hỏi tôi nhé!";
    }
    
    if (lowerQuestion.includes('tạm biệt') || lowerQuestion.includes('goodbye') || lowerQuestion.includes('bye')) {
        return "Tạm biệt! Chúc bạn có thêm nhiều hiểu biết về Chủ tịch Hồ Chí Minh. Hẹn gặp lại!";
    }
    
    // Trả lời chung - gợi ý các chủ đề
    return "Cảm ơn bạn đã hỏi về Chủ tịch Hồ Chí Minh. Tôi có thể trả lời các câu hỏi về:\n\n" +
           "📅 Ngày sinh, quê quán\n" +
           "🚢 Hành trình tìm đường cứu nước\n" +
           "🏛️ Sự nghiệp cách mạng\n" +
           "💭 Tư tưởng Hồ Chí Minh\n" +
           "💬 Câu nói nổi tiếng\n" +
           "🏆 Di sản và thành tựu\n" +
           "👨‍👩‍👧‍👦 Gia đình\n\n" +
           "Bạn muốn biết điều gì cụ thể? Hãy hỏi tôi nhé!";
}

// Escape HTML để tránh XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Add message to chat (compatible with chat.html structure)
function addMessage(text, isUser = true) {
    const chatMessages = document.getElementById('chat-messages');
    if (!chatMessages) return;
    
    const messageDiv = document.createElement('div');
    messageDiv.className = 'chat-message';
    
    if (isUser) {
        messageDiv.innerHTML = `
            <div style="background-color: #3b82f6; color: white; border-radius: 0.5rem; padding: 1rem; max-width: 80%; margin-left: auto; margin-bottom: 1rem;">
                <p style="margin: 0;">${escapeHtml(text)}</p>
            </div>
        `;
    } else {
        // Format text with line breaks for bot messages
        const formattedText = text.split('\n').map(line => {
            return line.trim() ? `<p style="margin: 0 0 0.5rem 0;">${escapeHtml(line)}</p>` : '<br>';
        }).join('');
        
        messageDiv.innerHTML = `
            <div style="background: white; border: 1px solid #e5e7eb; border-radius: 0.5rem; padding: 1rem; max-width: 80%; margin-bottom: 1rem;">
                <div style="color: #1f2937;">${formattedText}</div>
            </div>
        `;
    }
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Add typing indicator
function addTypingIndicator() {
    const chatMessages = document.getElementById('chat-messages');
    if (!chatMessages) return;
    
    const typingDiv = document.createElement('div');
    typingDiv.id = 'typing-indicator';
    typingDiv.className = 'chat-message';
            typingDiv.innerHTML = `
        <div style="background: white; border: 1px solid #e5e7eb; border-radius: 0.5rem; padding: 1rem; max-width: 80%; margin-bottom: 1rem;">
            <div class="typing-indicator">
                <span></span><span></span><span></span>
            </div>
        </div>
    `;
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Remove typing indicator
function removeTypingIndicator() {
    const indicator = document.getElementById('typing-indicator');
    if (indicator) {
        indicator.remove();
    }
}

// Send message function (sử dụng Gemini API hoặc fallback)
async function sendMessage() {
    const input = document.getElementById('chat-input');
    if (!input) return;
    
    const message = input.value.trim();
    if (!message) return;

    // Add user message to chat
    addMessage(message, true);
    input.value = '';

    // Show typing indicator
    addTypingIndicator();

    // Disable send button
    const sendButton = document.getElementById('send-button');
    if (sendButton) {
        sendButton.disabled = true;
    }

    try {
        // Nếu có API key, sử dụng Gemini API
        if (apiKey) {
            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${MODEL_ID}:generateContent?key=${apiKey}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    contents: [{
                        parts: [{
                            text: `Bạn là một AI chuyên gia về Chủ tịch Hồ Chí Minh. Hãy trả lời câu hỏi sau đây một cách chính xác, chi tiết và tôn trọng về cuộc đời, sự nghiệp và tư tưởng của Người:\n\n${message}`
                        }]
                    }],
                    generationConfig: {
                        temperature: 0.7,
                        topK: 40,
                        topP: 0.95,
                        maxOutputTokens: 1024,
                    }
                })
            });

            const data = await response.json();

            if (data.error) {
                throw new Error(data.error.message || 'Lỗi khi gọi API');
            }

            if (data.candidates && data.candidates[0] && data.candidates[0].content) {
                const botMessage = data.candidates[0].content.parts[0].text;
                removeTypingIndicator();
                addMessage(botMessage, false);
            } else {
                throw new Error('Không nhận được phản hồi từ AI');
            }
        } else {
            // Fallback: sử dụng knowledge base
            setTimeout(() => {
                removeTypingIndicator();
                const response = getFallbackResponse(message);
                addMessage(response, false);
            }, 800);
        }
    } catch (error) {
        console.error('Error:', error);
        removeTypingIndicator();
        // Fallback to knowledge base on error
        const response = getFallbackResponse(message);
        addMessage(response, false);
    } finally {
        // Re-enable send button
        if (sendButton) {
            sendButton.disabled = false;
        }
    }
}

// Ask quick question function
function askQuickQuestion(question) {
    const input = document.getElementById('chat-input');
    if (input) {
        input.value = question;
        sendMessage();
    }
}

// Initialize when DOM is ready
function initChat() {
    // Wait for config to load
    if (typeof window.APP_CONFIG === 'undefined') {
        setTimeout(initChat, 100);
        return;
    }
    
    // Update API key
    apiKey = (window.APP_CONFIG && window.APP_CONFIG.GEMINI_API_KEY) ? window.APP_CONFIG.GEMINI_API_KEY : '';
    
    // Add welcome message
    const chatMessages = document.getElementById('chat-messages');
    if (chatMessages && chatMessages.children.length === 0) {
        const welcomeDiv = document.createElement('div');
        welcomeDiv.className = 'chat-message';
        welcomeDiv.innerHTML = `
            <div style="background-color: #dbeafe; border-radius: 0.5rem; padding: 1rem; max-width: 80%; margin-left: auto; margin-bottom: 1rem;">
                <p style="color: #1f2937; margin: 0;">Xin chào! Tôi có thể giúp bạn tìm hiểu về Chủ tịch Hồ Chí Minh. Bạn muốn hỏi gì?</p>
            </div>
        `;
        chatMessages.appendChild(welcomeDiv);
    }

    // Send message on button click
    const sendButton = document.getElementById('send-button');
    if (sendButton) {
        sendButton.addEventListener('click', sendMessage);
    }

    // Send message on Enter key
    const chatInput = document.getElementById('chat-input');
    if (chatInput) {
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
        
        // Auto-focus input
        setTimeout(() => chatInput.focus(), 100);
    }

    // Quick question buttons
    const quickQuestionButtons = document.querySelectorAll('.quick-question-btn');
    quickQuestionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const question = button.getAttribute('data-question');
            if (question) {
                askQuickQuestion(question);
            }
        });
    });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initChat);
} else {
    initChat();
}

