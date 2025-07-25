function showTab(tabId) {
  const tabs = document.querySelectorAll('.tab-content');
  tabs.forEach(tab => {
    tab.style.display = tab.id === tabId ? 'block' : 'none';
  });
}

// Отправка отчета ГОС
// Отправка отчета ГОС
function submitGos() {
  const data = {
    type: 'gos',
    clients: document.getElementById('gos_clients').value,
    rfm: document.getElementById('gos_rfm').value,
    cut: document.getElementById('gos_cut').value,
    missed: document.getElementById('gos_missed').value,
    list: document.getElementById('gos_list').value,
    telegram_id: Telegram.WebApp.initDataUnsafe.user.id,
    name: Telegram.WebApp.initDataUnsafe.user.first_name
  };

  fetch('fetch('https://workspace.audinuli.id.repl.co/api/report', {
', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => {
      if (response.ok) {
        alert('✅ Отчет ГОС успешно отправлен!');
      } else {
        alert('❌ Ошибка при отправке отчета');
      }
    })
    .catch(error => {
      console.error('Ошибка:', error);
      alert('❌ Ошибка соединения');
    });
}

// Отправка отчета ЗАКРЫВ
// Отправка отчета ЗАКРЫВ
function submitZakriv() {
  const data = {
    type: 'zakriv',
    from_gos: document.getElementById('zak_gos').value,
    cut: document.getElementById('zak_cut').value,
    done: document.getElementById('zak_done').value,
    total: document.getElementById('zak_total').value,
    telegram_id: Telegram.WebApp.initDataUnsafe.user.id,
    name: Telegram.WebApp.initDataUnsafe.user.first_name
  };

  fetch('fetch('https://workspace.audinuli.id.repl.co/api/report', {
', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => {
      if (response.ok) {
        alert('✅ Отчет ЗАКРЫВ успешно отправлен!');
      } else {
        alert('❌ Ошибка при отправке отчета');
      }
    })
    .catch(error => {
      console.error('Ошибка:', error);
      alert('❌ Ошибка соединения');
    });
}
