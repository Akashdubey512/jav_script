const insert = document.querySelector('#insert')

window.addEventListener('keydown', function (e) {
    insert.innerHTML = `
    <div class="color"><table>
        <tr>
            <td>Key</td>
            <td>Keycode </td>
            <td>Code</td>
        </tr>
        <tr>
            <td>${e.key === " " ? 'space' : e.key}</td>
            <td>${e.keyCode}</td>
            <td>${e.code}</td>
        </tr>
    </table></div>`;
});