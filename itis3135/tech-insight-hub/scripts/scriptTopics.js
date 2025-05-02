
document.querySelectorAll(".topic-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const selectedTopic = button.getAttribute("data-topic");
    let content = "";
    const contentAI = '<section><h2>🚀 Artificial Intelligence & Machine Learning</h2><p>AI is transforming industries with automation, predictive analytics, and intelligent decision-making.</p></section>';
    const contentWeb = '<h2>💻 Web Development & UX</h2><p>Web development is evolving with AI-driven personalization, modern frameworks, and responsive design.</p>';
    const contentCyber = '<section class="topic"><h2>🔐 Cybersecurity & Data Protection</h2><p>AI-powered security systems are detecting threats and preventing cyberattacks in real time.</p></section>';
    const communityDiscuss = `
<section><h2>📢 Community & Discussion</h2>
<p>Join the conversation and explore innovative solutions shaping the future of technology.</p></section>`;

    switch (selectedTopic) {
      case "ai":
        content = contentAI;
        break;
      case "web":
        content = contentWeb;
        break;
      case "cyber":
        content = contentCyber;
        break;
      case "all":
        content = `${contentAI} ${contentWeb} ${contentCyber} ${content} ${communityDiscuss}`;
        break;
    }
    document.getElementById("topics-container").innerHTML = content;
  });
});
