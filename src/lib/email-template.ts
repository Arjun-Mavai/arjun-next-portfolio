export const generateEmailTemplate = (name: string) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 0;
      padding: 0;
      background-color: #f4f4f4;
    }
    .container {
      max-width: 600px;
      margin: 20px auto;
      padding: 20px;
      background-color: #ffffff;
      border-radius: 10px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }
    .header {
      text-align: center;
      padding: 20px 0;
      border-bottom: 2px solid #f0f0f0;
    }
    .content {
      padding: 20px 0;
    }
    .quote {
      font-style: italic;
      color: #666;
      border-left: 3px solid #3b82f6;
      padding-left: 15px;
      margin: 20px 0;
    }
    .button {
      display: inline-block;
      padding: 12px 24px;
      background-color: #3b82f6;
      color: white;
      text-decoration: none;
      border-radius: 5px;
      margin: 20px 0;
    }
    .footer {
      text-align: center;
      padding-top: 20px;
      border-top: 2px solid #f0f0f0;
      color: #666;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Welcome, ${name}! 👋</h1>
    </div>
    <div class="content">
      <p>Thank you for reaching out! I'm excited to connect with you.</p>
      
      <div class="quote">
        "The only way to do great work is to love what you do." - Steve Jobs
      </div>
      
      <p>I've received your message and will get back to you as soon as possible. In the meantime, feel free to check out my latest projects and connect with me on social media.</p>
      
      <center>
        <a href="https://github.com/yourusername" class="button">
          Visit My GitHub
        </a>
      </center>
    </div>
    <div class="footer">
      <p>Best regards,<br>Arjun Singh Gurjar</p>
      <p>Full Stack Developer</p>
    </div>
  </div>
</body>
</html>
`