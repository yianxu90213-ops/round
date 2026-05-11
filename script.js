let currentMode = 0;

function setMode(mode) {
  currentMode = mode;
  document.querySelectorAll('.mode-btn').forEach((btn, i) => {
    if (i === mode) {
      btn.classList.add('active', 'bg-orange-500', 'text-white', 'shadow-inner');
      btn.classList.remove('bg-white', 'border-gray-200');
    } else {
      btn.classList.remove('active', 'bg-orange-500', 'text-white', 'shadow-inner');
      btn.classList.add('bg-white', 'border-gray-200');
    }
  });
}

function calculate() {
  const input = document.getElementById('number').value.trim();
  const place = parseInt(document.getElementById('place').value);
  const num = parseFloat(input);

  if (isNaN(num)) {
    alert("請輸入正確的數字喔～");
    return;
  }

  let result;
  let modeText = "";

  const factor = Math.pow(10, place);

  if (currentMode === 0) {
    result = Math.round(num * factor) / factor;
    modeText = "四捨五入";
  } else if (currentMode === 1) {
    result = Math.floor(num * factor) / factor;
    modeText = "無條件捨去";
  } else if (currentMode === 2) {
    result = Math.ceil(num * factor) / factor;
    modeText = "無條件進位";
  }

  document.getElementById('result').textContent = result;

  document.getElementById('explain').innerHTML = `
    <p><strong>原始數字：</strong> ${num}</p>
    <p><strong>計算方式：</strong> ${modeText}</p>
    <p><strong>取位：</strong> ${document.getElementById('place').selectedOptions[0].text}</p>
  `;

  document.getElementById('resultArea').classList.remove('hidden');
}

window.onload = () => setMode(0);
