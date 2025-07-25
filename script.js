function showTab(tabId) {
  const tabs = document.querySelectorAll('.tab-content');
  tabs.forEach(tab => {
    tab.style.display = tab.id === tabId ? 'block' : 'none';
  });
}

// Отправка отчета ГОС
function submitGos() {
  const data = {
    type: 'gos',
    clients: document.getElementById('gos_clients').value,
    rfm: document.getElementById('gos_rfm').value,
    cut: document.getElementById('gos_cut').value,
    missed: document.getElementById('gos_missed').value,
    list: document.getElementById('gos_list').value
  };
  console.log('Отправлен отчет ГОС:', data);
  alert('Отчет ГОС отправлен!');
}

// Отправка отчета ЗАКРЫВ
function submitZakriv() {
  const data = {
    type: 'zakriv',
    from_gos: document.getElementById('zak_gos').value,
    cut: document.getElementById('zak_cut').value,
    done: document.getElementById('zak_done').value,
    total: document.getElementById('zak_total').value
  };
  console.log('Отправлен отчет ЗАКРЫВ:', data);
  alert('Отчет ЗАКРЫВ отправлен!');
}
