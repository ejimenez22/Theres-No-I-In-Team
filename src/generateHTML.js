function generateHTML(employees) {
  console.log(employees)
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
              <li>Name:${employees[0].name}</li>
              <li>ID Number:${employees[0].id}</li>
              <li>Email:${employees[0].email}</li>
              <li>Office Number:${employees[0].officeNumber}</li>
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
                <li>Name:${employees[1].name}</li>
                <li>ID Number:${employees[1].id}</li>
                <li>Email:${employees[1].email}</li>
                <li>Github Link:https://github.com/${employees[1].github}</li>
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
                <li>Name:${employees[2].name}</li>
                <li>ID Number:${employees[2].id}</li>
                <li>Email:${employees[2].email}</li>
                <li>School:${employees[2].school}</li>
            </ul>
        </div>
      </article>
</body>
</html>
    `
}

module.exports = generateHTML;