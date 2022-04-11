function generateHTML(data) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
    <title>Team Portfolio</title>
</head>
<body>
    <article class="message is-info">
        <div class="message-header">
          <p>Manager</p>
          <button class="delete" aria-label="delete"></button>
        </div>
        <div class="message-body">
          <ul>
              <li>Name:${data.mgrName}</li>
              <li>ID Number:${data.mgrId}</li>
              <li>Email:${data.mgrEmail}</li>
              <li>Office Number:${data.mgrOffice}</li>
          </ul>
        </div>
      </article>
      <article class="message is-info">
        <div class="message-header">
          <p>Engineer</p>
          <button class="delete" aria-label="delete"></button>
        </div>
        <div class="message-body">
            <ul>
                <li>Name:${data.emName}</li>
                <li>ID Number:${data.emId}</li>
                <li>Email:${data.emEmail}</li>
                <li>Github Link:https://github.com/${data.engGithub}</li>
            </ul>
        </div>
      </article>
      <article class="message is-info">
        <div class="message-header">
          <p>Intern</p>
          <button class="delete" aria-label="delete"></button>
        </div>
        <div class="message-body">
            <ul>
                <li>Name:${data.emName}</li>
                <li>ID Number:${data.emId}</li>
                <li>Email:${data.emEmail}</li>
                <li>School:${data.intSchool}</li>
            </ul>
        </div>
      </article>
</body>
</html>
    `
}

module.exports = generateHTML;