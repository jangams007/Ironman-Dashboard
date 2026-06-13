// ===========================
// RAW DATA (Whoop baseline)
// ===========================
const rawData = [{"date":"2026-05-07","recove// ===========================
// RAW DATA (Whoop baseline)
// ===========================
const rawData = [{"date":"2026-05-07","recovery":37,"hrv":29,"rhr":62,"strain":4.1,"calories":1597,"sleep_dur":338,"sleep_need":593,"workouts":[]},{"date":"2026-05-08","recovery":28,"hrv":26,"rhr":70,"strain":12.6,"calories":1901,"sleep_dur":449,"sleep_need":598,"workouts":[{"activity":"Swimming","duration":58,"strain":12.1,"calories":555,"avg_hr":135,"max_hr":175}]},{"date":"2026-05-09","recovery":null,"hrv":null,"rhr":null,"strain":12.3,"calories":null,"sleep_dur":null,"sleep_need":null,"workouts":[{"activity":"Functional Fitness","duration":66,"strain":12.3,"calories":236,"avg_hr":108,"max_hr":142}]},{"date":"2026-05-10","recovery":65,"hrv":34,"rhr":63,"strain":11.7,"calories":1801,"sleep_dur":412,"sleep_need":565,"workouts":[{"activity":"Functional Fitness","duration":62,"strain":11.6,"calories":132,"avg_hr":100,"max_hr":135}]},{"date":"2026-05-11","recovery":27,"hrv":29,"rhr":66,"strain":13.3,"calories":2213,"sleep_dur":283,"sleep_need":563,"workouts":[{"activity":"Swimming","duration":65,"strain":12.4,"calories":589,"avg_hr":132,"max_hr":167}]},{"date":"2026-05-13","recovery":63,"hrv":32,"rhr":63,"strain":4.5,"calories":1677,"sleep_dur":376,"sleep_need":571,"workouts":[]},{"date":"2026-05-14","recovery":78,"hrv":36,"rhr":63,"strain":12.9,"calories":2311,"sleep_dur":399,"sleep_need":564,"workouts":[]},{"date":"2026-05-15","recovery":90,"hrv":43,"rhr":65,"strain":12.1,"calories":1834,"sleep_dur":378,"sleep_need":576,"workouts":[{"activity":"Swimming","duration":57,"strain":12.1,"calories":528,"avg_hr":133,"max_hr":175}]},{"date":"2026-05-16","recovery":54,"hrv":31,"rhr":62,"strain":9.5,"calories":1911,"sleep_dur":353,"sleep_need":550,"workouts":[{"activity":"Functional Fitness","duration":63,"strain":11.8,"calories":161,"avg_hr":103,"max_hr":144}]},{"date":"2026-05-17","recovery":47,"hrv":38,"rhr":62,"strain":3.7,"calories":1771,"sleep_dur":190,"sleep_need":420,"workouts":[{"activity":"Swimming","duration":37,"strain":9.8,"calories":146,"avg_hr":106,"max_hr":154}]},{"date":"2026-05-18","recovery":77,"hrv":39,"rhr":61,"strain":12.1,"calories":1758,"sleep_dur":333,"sleep_need":547,"workouts":[]},{"date":"2026-05-19","recovery":92,"hrv":41,"rhr":59,"strain":3.2,"calories":1710,"sleep_dur":454,"sleep_need":574,"workouts":[{"activity":"Functional Fitness","duration":57,"strain":11.8,"calories":183,"avg_hr":107,"max_hr":139}]},{"date":"2026-05-20","recovery":74,"hrv":35,"rhr":62,"strain":9.9,"calories":2060,"sleep_dur":392,"sleep_need":525,"workouts":[]},{"date":"2026-05-21","recovery":85,"hrv":39,"rhr":61,"strain":11.7,"calories":2157,"sleep_dur":401,"sleep_need":544,"workouts":[{"activity":"Swimming","duration":41,"strain":8.6,"calories":329,"avg_hr":128,"max_hr":163}]},{"date":"2026-05-22","recovery":71,"hrv":34,"rhr":69,"strain":16.8,"calories":2535,"sleep_dur":425,"sleep_need":557,"workouts":[{"activity":"Swimming","duration":41,"strain":9.7,"calories":367,"avg_hr":131,"max_hr":172}]},{"date":"2026-05-23","recovery":null,"hrv":null,"rhr":null,"strain":14.4,"calories":null,"sleep_dur":null,"sleep_need":null,"workouts":[{"activity":"HIIT","duration":41,"strain":14.4,"calories":512,"avg_hr":147,"max_hr":169},{"activity":"Functional Fitness","duration":46,"strain":11.5,"calories":252,"avg_hr":117,"max_hr":155}]},{"date":"2026-05-24","recovery":83,"hrv":38,"rhr":62,"strain":12.2,"calories":1914,"sleep_dur":419,"sleep_need":581,"workouts":[{"activity":"Functional Fitness","duration":58,"strain":11.5,"calories":127,"avg_hr":102,"max_hr":133}]},{"date":"2026-05-25","recovery":94,"hrv":44,"rhr":63,"strain":12.1,"calories":2170,"sleep_dur":381,"sleep_need":547,"workouts":[{"activity":"Swimming","duration":67,"strain":11.1,"calories":570,"avg_hr":130,"max_hr":159}]},{"date":"2026-05-26","recovery":49,"hrv":33,"rhr":66,"strain":10,"calories":2133,"sleep_dur":432,"sleep_need":552,"workouts":[{"activity":"Cycling","duration":60,"strain":7.5,"calories":306,"avg_hr":116,"max_hr":140}]},{"date":"2026-05-27","recovery":null,"hrv":null,"rhr":null,"strain":9,"calories":null,"sleep_dur":null,"sleep_need":null,"workouts":[{"activity":"Swimming","duration":36,"strain":9,"calories":323,"avg_hr":132,"max_hr":164}]},{"date":"2026-05-28","recovery":73,"hrv":38,"rhr":60,"strain":4.8,"calories":1684,"sleep_dur":365,"sleep_need":536,"workouts":[{"activity":"HIIT","duration":13,"strain":4.3,"calories":32,"avg_hr":96,"max_hr":155}]},{"date":"2026-05-29","recovery":null,"hrv":null,"rhr":null,"strain":12.7,"calories":null,"sleep_dur":null,"sleep_need":null,"workouts":[{"activity":"Swimming","duration":53,"strain":12.7,"calories":557,"avg_hr":139,"max_hr":169}]},{"date":"2026-05-30","recovery":35,"hrv":30,"rhr":66,"strain":12.4,"calories":1807,"sleep_dur":335,"sleep_need":596,"workouts":[{"activity":"Functional Fitness","duration":77,"strain":12,"calories":206,"avg_hr":101,"max_hr":136}]},{"date":"2026-05-31","recovery":36,"hrv":28,"rhr":71,"strain":4,"calories":1619,"sleep_dur":439,"sleep_need":596,"workouts":[]},{"date":"2026-06-01","recovery":67,"hrv":35,"rhr":62,"strain":13.6,"calories":2208,"sleep_dur":362,"sleep_need":571,"workouts":[{"activity":"Swimming","duration":51,"strain":10.6,"calories":459,"avg_hr":132,"max_hr":167}]},{"date":"2026-06-02","recovery":null,"hrv":null,"rhr":null,"strain":12.9,"calories":null,"sleep_dur":null,"sleep_need":null,"workouts":[{"activity":"Weightlifting","duration":62,"strain":12.9,"calories":341,"avg_hr":117,"max_hr":152}]},{"date":"2026-06-03","recovery":29,"hrv":28,"rhr":71,"strain":1.9,"calories":1631,"sleep_dur":367,"sleep_need":579,"workouts":[]},{"date":"2026-06-04","recovery":77,"hrv":36,"rhr":64,"strain":12.7,"calories":1803,"sleep_dur":376,"sleep_need":554,"workouts":[{"activity":"Functional Fitness","duration":65,"strain":12.5,"calories":267,"avg_hr":111,"max_hr":146}]},{"date":"2026-06-05","recovery":null,"hrv":null,"rhr":null,"strain":11.4,"calories":null,"sleep_dur":null,"sleep_need":null,"workouts":[{"activity":"Swimming","duration":50,"strain":11.4,"calories":485,"avg_hr":136,"max_hr":164}]},{"date":"2026-06-06","recovery":63,"hrv":32,"rhr":63,"strain":13,"calories":353,"sleep_dur":340,"sleep_need":558,"workouts":[{"activity":"Strength","duration":66,"strain":13,"calories":353,"avg_hr":117,"max_hr":153}]},{"date":"2026-06-07","recovery":87,"hrv":40,"rhr":63,"strain":16.6,"calories":1276,"sleep_dur":390,"sleep_need":589,"workouts":[{"activity":"Cycling","duration":116,"strain":16.6,"calories":1276,"avg_hr":147,"max_hr":163}]},
{"date":"2026-06-08","recovery":68,"hrv":36,"rhr":61,"strain":12.2,"calories":2169,"sleep_dur":378,"sleep_need":null,"workouts":[{"activity":"Swimming","duration":40,"strain":null,"calories":null,"avg_hr":null,"max_hr":null,"distance_yd":2100,"pace":"1:55/100yd"}]},
{"date":"2026-06-09","recovery":79,"hrv":39,"rhr":57,"strain":12.5,"calories":1934,"sleep_dur":390,"sleep_need":null,"workouts":[{"activity":"Weightlifting","duration":60,"strain":null,"calories":null,"avg_hr":null,"max_hr":null}]},
{"date":"2026-06-10","recovery":89,"hrv":43,"rhr":56,"strain":9.3,"calories":1978,"sleep_dur":376,"sleep_need":null,"workouts":[{"activity":"Running","duration":27,"strain":null,"calories":null,"avg_hr":null,"max_hr":null,"distance_mi":2.01,"pace":"13:22/mi"}]},
{"date":"2026-06-11","recovery":19,"hrv":33,"rhr":66,"strain":9.8,"calories":1588,"sleep_dur":318,"sleep_need":null,"workouts":[{"activity":"Weightlifting","duration":48,"strain":null,"calories":null,"avg_hr":85,"max_hr":115}]},
{"date":"2026-06-12","recovery":68,"hrv":35,"rhr":59,"strain":11.1,"calories":null,"sleep_dur":422,"sleep_need":null,"workouts":[{"activity":"Swimming","duration":66,"strain":9.7,"calories":444,"avg_hr":126,"max_hr":null}]}];

// ===========================
// LOCALSTORAGE
// ===========================
const STORAGE_KEY = 'ironman_log_v1';

function getStoredEntries() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); }
  catch (e) { return []; }
}

function saveToStorage(entries) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
}

function buildDataset() {
  const stored = getStoredEntries();
  const merged = rawData.map(d => ({ ...d, workouts: [...(d.workouts || [])] }));

  stored.forEach(function(e) {
    const idx = merged.findIndex(d => d.date === e.date);
    const workouts = e.activity ? [{
      activity: e.activity,
      duration: +e.duration || 0,
      strain: +e.strain || 0,
      calories: +e.calories || 0,
      avg_hr: +e.avgHr || 0,
      max_hr: +e.maxHr || 0
    }] : [];

    const entry = {
      date: e.date,
      recovery: e.recovery ? +e.recovery : null,
      hrv: e.hrv ? +e.hrv : null,
      rhr: e.rhr ? +e.rhr : null,
      strain: e.strain ? +e.strain : null,
      calories: e.calories ? +e.calories : null,
      sleep_dur: e.sleepGot ? +e.sleepGot * 60 : null,
      sleep_need: e.sleepNeed ? +e.sleepNeed * 60 : null,
      workouts: workouts
    };

    if (idx >= 0) {
      const existingWorkouts = merged[idx].workouts || [];
      merged[idx] = Object.assign({}, merged[idx], entry);
      if (workouts.length) merged[idx].workouts = existingWorkouts.concat(workouts);
    } else {
      merged.push(entry);
    }
  });

  merged.sort((a, b) => a.date.localeCompare(b.date));
  return merged;
}

// ===========================
// CHART INSTANCES
// ===========================
var recoveryChart, strainChart, sleepChart;

const actColors = {
  Swimming: '#38bdf8', Cycling: '#f97316', Running: '#3fb950',
  Weightlifting: '#a371f7', 'Functional Fitness': '#a371f7',
  Strength: '#a371f7', HIIT: '#f85149', Brick: '#f97316',
  Walking: '#8b949e', Default: '#8b949e'
};

function renderCharts(dataset) {
  const datesWithData = dataset.filter(d => d.recovery != null);

  if (recoveryChart) recoveryChart.destroy();
  recoveryChart = new Chart(document.getElementById('recoveryChart').getContext('2d'), {
    data: {
      labels: datesWithData.map(d => d.date.slice(5)),
      datasets: [
        {
          type: 'bar', label: 'Recovery %',
          data: datesWithData.map(d => d.recovery),
          backgroundColor: datesWithData.map(d =>
            d.recovery >= 67 ? 'rgba(63,185,80,0.65)' :
            d.recovery >= 34 ? 'rgba(210,153,34,0.65)' :
            'rgba(248,81,73,0.65)'),
          borderRadius: 3, yAxisID: 'y'
        },
        {
          type: 'line', label: 'HRV (ms)',
          data: datesWithData.map(d => d.hrv),
          borderColor: '#38bdf8', backgroundColor: 'rgba(56,189,248,0.1)',
          borderWidth: 2, pointRadius: 3, tension: 0.4, yAxisID: 'y2', fill: false
        }
      ]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { labels: { color: '#8b949e', font: { size: 11 } } } },
      scales: {
        x: { ticks: { color: '#8b949e', font: { size: 10 } }, grid: { color: 'rgba(48,54,61,0.5)' } },
        y: { position: 'left', min: 0, max: 100, ticks: { color: '#8b949e', font: { size: 10 } }, grid: { color: 'rgba(48,54,61,0.3)' } },
        y2: { position: 'right', min: 20, max: 55, ticks: { color: '#38bdf8', font: { size: 10 } }, grid: { display: false } }
      }
    }
  });

  if (strainChart) strainChart.destroy();
  strainChart = new Chart(document.getElementById('strainChart').getContext('2d'), {
    data: {
      labels: dataset.map(d => d.date.slice(5)),
      datasets: [{
        type: 'bar', label: 'Day Strain',
        data: dataset.map(d => d.strain),
        backgroundColor: dataset.map(d => {
          const acts = (d.workouts || []).map(w => w.activity);
          if (acts.includes('Swimming')) return 'rgba(56,189,248,0.7)';
          if (acts.some(a => a === 'Cycling' || a === 'Brick')) return 'rgba(249,115,22,0.7)';
          if (acts.includes('Running')) return 'rgba(63,185,80,0.7)';
          if (acts.includes('HIIT')) return 'rgba(248,81,73,0.7)';
          return 'rgba(163,113,247,0.7)';
        }),
        borderRadius: 3
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: { ticks: { color: '#8b949e', font: { size: 10 } }, grid: { color: 'rgba(48,54,61,0.5)' } },
        y: { min: 0, max: 21, ticks: { color: '#8b949e', font: { size: 10 } }, grid: { color: 'rgba(48,54,61,0.3)' } }
      }
    }
  });

  if (sleepChart) sleepChart.destroy();
  sleepChart = new Chart(document.getElementById('sleepChart').getContext('2d'), {
    data: {
      labels: datesWithData.map(d => d.date.slice(5)),
      datasets: [
        {
          type: 'bar', label: 'Sleep Got (min)',
          data: datesWithData.map(d => d.sleep_dur),
          backgroundColor: 'rgba(163,113,247,0.65)', borderRadius: 3, order: 2
        },
        {
          type: 'line', label: 'Sleep Need (min)',
          data: datesWithData.map(d => d.sleep_need),
          borderColor: '#f85149', borderWidth: 2, borderDash: [5,3],
          pointRadius: 0, tension: 0.3, fill: false, order: 1
        }
      ]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { labels: { color: '#8b949e', font: { size: 11 } } } },
      scales: {
        x: { ticks: { color: '#8b949e', font: { size: 10 } }, grid: { color: 'rgba(48,54,61,0.5)' } },
        y: { min: 100, max: 700, ticks: { color: '#8b949e', font: { size: 10 }, callback: v => (v/60).toFixed(1)+'h' }, grid: { color: 'rgba(48,54,61,0.3)' } }
      }
    }
  });
}

// ===========================
// ACTIVITY LIST
// ===========================
function renderActivityList(dataset) {
  const el = document.getElementById('activityList');
  if (!el) return;
  el.innerHTML = '';
  const workouts = [];
  dataset.forEach(d => (d.workouts || []).forEach(w => workouts.push(Object.assign({}, w, { date: d.date }))));
  workouts.sort((a, b) => b.date.localeCompare(a.date));
  workouts.slice(0, 8).forEach(w => {
    const color = actColors[w.activity] || actColors.Default;
    const div = document.createElement('div');
    div.className = 'activity-row';
    div.innerHTML =
      '<div class="activity-dot" style="background:' + color + '"></div>' +
      '<div class="act-name">' + w.activity + '</div>' +
      '<div class="act-date">' + w.date.slice(5) + '</div>' +
      '<div class="act-stat">' + (w.duration || '--') + ' min' + (w.avg_hr ? ' · ' + w.avg_hr + '♥' : '') + '</div>' +
      '<div class="act-strain">' + (w.strain ? (+w.strain).toFixed(1) : '--') + '</div>';
    el.appendChild(div);
  });
}

// ===========================
// KPI REFRESH
// ===========================
function refreshKPIs(dataset) {
  const latest = dataset.filter(d => d.recovery != null).sort((a, b) => b.date.localeCompare(a.date))[0];
  if (!latest) return;

  const dateLabel = latest.date.slice(5);
  const rec = latest.recovery;
  const recColor = rec >= 67 ? 'var(--green)' : rec >= 34 ? 'var(--yellow)' : 'var(--red)';
  const recIcon = rec >= 67 ? '🟢 Green' : rec >= 34 ? '🟡 Yellow' : '🔴 Red';

  const rvEl = document.getElementById('kpi-recovery-val');
  const rsEl = document.getElementById('kpi-recovery-sub');
  if (rvEl) { rvEl.textContent = rec + '%'; rvEl.style.color = recColor; }
  if (rsEl) rsEl.textContent = dateLabel + ' ' + recIcon + ' · 90-day avg: 58%';

  const hvEl = document.getElementById('kpi-hrv-val');
  const hsEl = document.getElementById('kpi-hrv-sub');
  if (latest.hrv && hvEl) {
    hvEl.textContent = latest.hrv + ' ms';
    if (hsEl) hsEl.textContent = (latest.hrv >= 40 ? '↑ Above baseline' : '↓ Below baseline') + ' · 90-day avg: 34 ms';
  }

  const rrEl = document.getElementById('kpi-rhr-val');
  if (latest.rhr && rrEl) rrEl.textContent = latest.rhr + ' bpm';

  const srEl = document.getElementById('kpi-strain-val');
  if (latest.strain && srEl) srEl.textContent = (+latest.strain).toFixed(1);

  const slEl = document.getElementById('kpi-sleep-val');
  const ssEl = document.getElementById('kpi-sleep-sub');
  if (latest.sleep_dur && slEl) {
    const got = (latest.sleep_dur / 60).toFixed(1);
    const need = latest.sleep_need ? (latest.sleep_need / 60).toFixed(1) : '9.5';
    const deficit = Math.max(0, need - got).toFixed(1);
    slEl.textContent = got + ' hrs';
    if (ssEl) ssEl.textContent = dateLabel + ' · Need ' + need + ' hrs · Deficit ' + deficit + ' hrs';
  }

  const luEl = document.getElementById('lastUpdated');
  if (luEl) luEl.textContent = latest.date;
}

// ===========================
// LOG HISTORY
// ===========================
function renderLogHistory() {
  const stored = getStoredEntries().sort((a, b) => b.date.localeCompare(a.date));
  const container = document.getElementById('logHistoryContainer');
  const countEl = document.getElementById('logCount');
  if (countEl) countEl.textContent = stored.length + (stored.length === 1 ? ' entry' : ' entries');
  if (!container) return;

  if (stored.length === 0) {
    container.innerHTML = '<div class="empty-log">No entries yet. Click <strong>"📝 Log Today"</strong> after each session to build your training history.</div>';
    return;
  }

  const rows = stored.map(function(e) {
    const recColor = !e.recovery ? '#8b949e' :
      +e.recovery >= 67 ? '#3fb950' :
      +e.recovery >= 34 ? '#d29922' : '#f85149';
    return '<tr>' +
      '<td style="font-weight:600;">' + e.date + '</td>' +
      '<td style="color:' + recColor + ';font-weight:700;">' + (e.recovery ? e.recovery + '%' : '—') + '</td>' +
      '<td style="color:#38bdf8;">' + (e.hrv ? e.hrv + ' ms' : '—') + '</td>' +
      '<td style="color:#a371f7;">' + (e.sleepGot ? e.sleepGot + ' h' : '—') + '</td>' +
      '<td>' + (e.activity || '<span style="color:#8b949e;">Rest</span>') + '</td>' +
      '<td>' + (e.duration ? e.duration + ' min' : '—') + '</td>' +
      '<td style="color:#f97316;">' + (e.strain ? (+e.strain).toFixed(1) : '—') + '</td>' +
      '<td>' + (e.rpe ? e.rpe + '/10' : '—') + '</td>' +
      '<td style="color:#8b949e;font-size:11px;max-width:160px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">' + (e.notes || '') + '</td>' +
      '<td><button onclick="deleteLogEntry(\'' + e.date + '\')" style="background:none;border:none;color:#8b949e;cursor:pointer;font-size:12px;padding:2px 6px;" title="Delete">✕</button></td>' +
      '</tr>';
  }).join('');

  container.innerHTML =
    '<table class="log-history-table"><thead><tr>' +
    '<th>Date</th><th>Recovery</th><th>HRV</th><th>Sleep</th>' +
    '<th>Activity</th><th>Duration</th><th>Strain</th><th>RPE</th><th>Notes</th><th></th>' +
    '</tr></thead><tbody>' + rows + '</tbody></table>';
}

function deleteLogEntry(date) {
  if (!confirm('Delete entry for ' + date + '?')) return;
  const stored = getStoredEntries().filter(e => e.date !== date);
  saveToStorage(stored);
  refresh();
  showToast('🗑️ Entry deleted');
}

// ===========================
// MODAL
// ===========================
function openLogModal() {
  const today = new Date().toISOString().split('T')[0];
  document.getElementById('log-date').value = today;
  document.getElementById('log-rpe').value = 5;
  document.getElementById('rpeDisplay').textContent = '5/10';

  const stored = getStoredEntries();
  const existing = stored.find(e => e.date === today);
  const fields = ['recovery','hrv','rhr','strain','sleep-got','sleep-need',
    'duration','distance','calories','avg-hr','max-hr','notes'];

  if (existing) {
    const map = { recovery: 'recovery', hrv: 'hrv', rhr: 'rhr', strain: 'strain',
      'sleep-got': 'sleepGot', 'sleep-need': 'sleepNeed', duration: 'duration',
      distance: 'distance', calories: 'calories', 'avg-hr': 'avgHr',
      'max-hr': 'maxHr', notes: 'notes' };
    fields.forEach(f => {
      const el = document.getElementById('log-' + f);
      if (el) el.value = existing[map[f]] || '';
    });
    document.getElementById('log-activity').value = existing.activity || '';
    document.getElementById('log-rpe').value = existing.rpe || 5;
    document.getElementById('rpeDisplay').textContent = (existing.rpe || 5) + '/10';
  } else {
    fields.forEach(f => {
      const el = document.getElementById('log-' + f);
      if (el) el.value = '';
    });
    document.getElementById('log-activity').value = '';
  }

  document.getElementById('logOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLogModal() {
  document.getElementById('logOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function overlayClick(e) {
  if (e.target === document.getElementById('logOverlay')) closeLogModal();
}

// ===========================
// SAVE ENTRY
// ===========================
function saveLogEntry() {
  const date = document.getElementById('log-date').value;
  if (!date) { alert('Please select a date'); return; }

  const entry = {
    date: date,
    recovery: document.getElementById('log-recovery').value,
    hrv: document.getElementById('log-hrv').value,
    rhr: document.getElementById('log-rhr').value,
    strain: document.getElementById('log-strain').value,
    sleepGot: document.getElementById('log-sleep-got').value,
    sleepNeed: document.getElementById('log-sleep-need').value,
    activity: document.getElementById('log-activity').value,
    duration: document.getElementById('log-duration').value,
    distance: document.getElementById('log-distance').value,
    calories: document.getElementById('log-calories').value,
    avgHr: document.getElementById('log-avg-hr').value,
    maxHr: document.getElementById('log-max-hr').value,
    rpe: document.getElementById('log-rpe').value,
    notes: document.getElementById('log-notes').value,
    savedAt: new Date().toISOString()
  };

  const stored = getStoredEntries();
  const idx = stored.findIndex(e => e.date === date);
  if (idx >= 0) stored[idx] = entry; else stored.push(entry);
  saveToStorage(stored);

  refresh();
  closeLogModal();
  showToast('✅ Entry saved — charts updated!');
}

// ===========================
// TODAY'S ACTIVITIES CARD
// ===========================
function renderTodayCard() {
  const today = new Date().toISOString().split('T')[0];
  const dateEl = document.getElementById('todayDate');
  const contentEl = document.getElementById('todayContent');

  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const d = new Date();
  if (dateEl) dateEl.textContent = d.getDate() + ' ' + months[d.getMonth()];
  if (!contentEl) return;

  const dataset = buildDataset();
  const entry = dataset.find(function(d) { return d.date === today; });
  const stored = getStoredEntries().find(function(e) { return e.date === today; });

  if (!entry && !stored) {
    contentEl.innerHTML = '<div class="empty-log">No session logged yet today. Tap <strong>+ Log</strong> to record your workout.</div>';
    return;
  }

  const rec = (entry && entry.recovery) || (stored && stored.recovery);
  const hrv = (entry && entry.hrv) || (stored && stored.hrv);
  const strain = (entry && entry.strain) || (stored && stored.strain);
  const workouts = (entry && entry.workouts && entry.workouts.length) ? entry.workouts : [];

  const recColor = !rec ? '#8b949e' : rec >= 67 ? '#3fb950' : rec >= 34 ? '#d29922' : '#f85149';
  const recIcon  = !rec ? '' : rec >= 67 ? '🟢' : rec >= 34 ? '🟡' : '🔴';

  var html = '<div style="display:flex; gap:16px; flex-wrap:wrap; margin-bottom:12px;">';
  if (rec) html += '<div style="background:var(--surface2);border:1px solid var(--border);border-radius:8px;padding:10px 16px;text-align:center;">' +
    '<div style="font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;">Recovery</div>' +
    '<div style="font-size:22px;font-weight:700;color:' + recColor + ';">' + rec + '%&nbsp;' + recIcon + '</div></div>';
  if (hrv) html += '<div style="background:var(--surface2);border:1px solid var(--border);border-radius:8px;padding:10px 16px;text-align:center;">' +
    '<div style="font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;">HRV</div>' +
    '<div style="font-size:22px;font-weight:700;color:var(--accent2);">' + hrv + ' ms</div></div>';
  if (strain) html += '<div style="background:var(--surface2);border:1px solid var(--border);border-radius:8px;padding:10px 16px;text-align:center;">' +
    '<div style="font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;">Strain</div>' +
    '<div style="font-size:22px;font-weight:700;color:var(--accent);">' + (+strain).toFixed(1) + '</div></div>';
  if (stored && stored.sleepGot) html += '<div style="background:var(--surface2);border:1px solid var(--border);border-radius:8px;padding:10px 16px;text-align:center;">' +
    '<div style="font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;">Sleep</div>' +
    '<div style="font-size:22px;font-weight:700;color:var(--purple);">' + stored.sleepGot + ' hrs</div></div>';
  html += '</div>';

  if (workouts.length) {
    html += '<div class="activity-list">';
    workouts.forEach(function(w) {
      var color = actColors[w.activity] || actColors.Default;
      html += '<div class="activity-row">' +
        '<div class="activity-dot" style="background:' + color + '"></div>' +
        '<div class="act-name">' + w.activity + '</div>' +
        '<div class="act-stat">' + (w.duration || '--') + ' min' + (w.avg_hr ? ' · ' + w.avg_hr + '♥' : '') + '</div>' +
        '<div class="act-strain">' + (w.strain ? (+w.strain).toFixed(1) : '--') + '</div>' +
        '</div>';
    });
    html += '</div>';
  } else if (!rec && !hrv) {
    html += '<div class="empty-log">No session logged yet today. Tap <strong>+ Log</strong> to record your workout.</div>';
  }

  if (stored && stored.notes) {
    html += '<div style="margin-top:10px;font-size:12px;color:var(--muted);padding:8px 12px;background:var(--surface2);border-radius:6px;">📝 ' + stored.notes + '</div>';
  }

  contentEl.innerHTML = html;
}

// ===========================
// REFRESH ALL
// ===========================
function refresh() {
  const dataset = buildDataset();
  renderCharts(dataset);
  renderActivityList(dataset);
  renderLogHistory();
  refreshKPIs(dataset);
  renderTodayCard();
}

// ===========================
// TOAST
// ===========================
function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

// ===========================
// SECTION NAV
// ===========================
var SECTIONS = ['today', 'trends', 'plan', 'race', 'log'];

function showSection(name) {
  SECTIONS.forEach(function(s) {
    var panel = document.getElementById('section-' + s);
    var btn   = document.getElementById('nav-' + s);
    if (panel) panel.className = 'section-panel' + (s === name ? ' active' : '');
    if (btn)   btn.className   = 'nav-btn'        + (s === name ? ' active' : '');
  });
  // Re-render charts when Trends tab becomes visible (they need visible canvas)
  if (name === 'trends') {
    var dataset = buildDataset();
    renderCharts(dataset);
  }
  // Scroll to top of container
  var container = document.querySelector('.container');
  if (container) container.scrollIntoView({ behavior: 'smooth', block: 'start' });
  try { localStorage.setItem('activeSection', name); } catch(e) {}
}

// ===========================
// PHASE TABS
// ===========================
function showPhase(n) {
  document.querySelectorAll('.phase-content').forEach(el => el.classList.remove('visible'));
  document.querySelectorAll('.phase-tab').forEach(el => el.classList.remove('active'));
  document.getElementById('phase-' + n).classList.add('visible');
  document.querySelectorAll('.phase-tab')[n - 1].classList.add('active');
}

// ===========================
// COUNTDOWN
// ===========================
(function() {
  const raceDate = new Date('2026-10-04T00:00:00');
  const now = new Date(); now.setHours(0,0,0,0);
  const days = Math.ceil((raceDate - now) / 86400000);
  const el = document.getElementById('countdown-days');
  if (el) el.textContent = days;

  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const fd = document.getElementById('footerDate');
  const d = new Date();
  if (fd) fd.textContent = d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear();
})();

// ===========================
// PWA
// ===========================
var deferredPrompt = null;
window.addEventListener('beforeinstallprompt', function(e) {
  e.preventDefault();
  deferredPrompt = e;
  const btn = document.getElementById('installBtn');
  if (btn) btn.classList.add('visible');
});

function installPWA() {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  deferredPrompt.userChoice.then(function() {
    deferredPrompt = null;
    const btn = document.getElementById('installBtn');
    if (btn) btn.classList.remove('visible');
  });
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js').catch(function() {});
}

// ===========================
// INIT
// ===========================
refresh();
// Restore last active tab (default: today)
try {
  var savedSection = localStorage.getItem('activeSection') || 'today';
  if (SECTIONS.indexOf(savedSection) >= 0) showSection(savedSection);
} catch(e) { showSection('today'); }

// ===========================
// AI COACH CHATBOT
// ===========================
var chatOpen = false;
var chatHistory = [];

function toggleChat() {
  chatOpen = !chatOpen;
  var panel = document.getElementById('chatPanel');
  if (panel) panel.classList.toggle('open', chatOpen);
  if (chatOpen && chatHistory.length === 0) {
    setTimeout(function() { chatBotGreet(); }, 300);
  }
  if (chatOpen) {
    setTimeout(function() {
      var inp = document.getElementById('chatInput');
      if (inp) inp.focus();
    }, 400);
  }
}

function chatBotGreet() {
  var dataset = buildDataset();
  var daysToRace = Math.ceil((new Date('2026-10-04') - new Date()) / 86400000);
  var latest = dataset.filter(function(d) { return d.recovery != null; }).slice(-1)[0];
  var rec = latest ? latest.recovery : null;
  var recText = rec ? (rec >= 67 ? '🟢 ' + rec + '% — green zone' : rec >= 34 ? '🟡 ' + rec + '% — yellow zone' : '🔴 ' + rec + '% — red zone') : 'not logged yet';

  chatAddMessage('bot',
    "Hey Sri! 👋 I'm your AI Coach — I know all your Whoop data.\n\n" +
    "Quick snapshot:\n" +
    "• Latest recovery: " + recText + "\n" +
    "• Days to Ironman Maryland: " + daysToRace + " days\n" +
    "• Current phase: Phase 1 — Base 🏗️\n\n" +
    "Ask me anything about your training, or tap a quick question below."
  );
}

function chatSend() {
  var inp = document.getElementById('chatInput');
  if (!inp || !inp.value.trim()) return;
  var q = inp.value.trim();
  inp.value = '';
  chatAsk(q);
}

function chatAsk(question) {
  chatAddMessage('user', question);
  // Show typing indicator
  var typingId = chatAddTyping();
  setTimeout(function() {
    removeTyping(typingId);
    var answer = chatRespond(question);
    chatAddMessage('bot', answer);
  }, 600 + Math.random() * 400);
  // Make sure panel is open
  if (!chatOpen) toggleChat();
}

function chatAddMessage(role, text) {
  var msgs = document.getElementById('chatMessages');
  if (!msgs) return;
  var div = document.createElement('div');
  div.className = 'chat-msg ' + role;
  var avatarHtml = role === 'bot'
    ? '<div class="chat-msg-avatar">🏊</div>'
    : '';
  // Convert \n to <br>
  var formatted = text.replace(/\n/g, '<br>');
  div.innerHTML = avatarHtml + '<div class="chat-bubble">' + formatted + '</div>';
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
  chatHistory.push({ role: role, text: text });
}

function chatAddTyping() {
  var msgs = document.getElementById('chatMessages');
  if (!msgs) return null;
  var id = 'typing-' + Date.now();
  var div = document.createElement('div');
  div.className = 'chat-msg bot';
  div.id = id;
  div.innerHTML = '<div class="chat-msg-avatar">🏊</div><div class="chat-bubble"><div class="chat-typing"><span></span><span></span><span></span></div></div>';
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
  return id;
}

function removeTyping(id) {
  if (!id) return;
  var el = document.getElementById(id);
  if (el) el.remove();
}

// ── Response Engine ───────────────────────────────────────────────────────────
function chatRespond(q) {
  var ql = q.toLowerCase();
  var dataset = buildDataset();

  if (matchAny(ql, ['ready','train today','readiness','should i train','can i train'])) {
    return answerReadiness(dataset);
  }
  if (matchAny(ql, ['sleep','rest','tired','fatigue'])) {
    return answerSleep(dataset);
  }
  if (matchAny(ql, ['hrv','heart rate variability'])) {
    return answerHRV(dataset);
  }
  if (matchAny(ql, ['race','days to','countdown','maryland','ironman'])) {
    return answerRace();
  }
  if (matchAny(ql, ['best session','top session','best workout','personal best','pr'])) {
    return answerBestSessions(dataset);
  }
  if (matchAny(ql, ['gap','weak','missing','behind','behind on'])) {
    return answerGaps(dataset);
  }
  if (matchAny(ql, ['week','this week','weekly','summary'])) {
    return answerWeeklySummary(dataset);
  }
  if (matchAny(ql, ['swim','swimming','pool'])) {
    return answerSport(dataset, 'swim');
  }
  if (matchAny(ql, ['bike','cycling','cycle','ride'])) {
    return answerSport(dataset, 'bike');
  }
  if (matchAny(ql, ['run','running','jog'])) {
    return answerSport(dataset, 'run');
  }
  if (matchAny(ql, ['recovery','recover','feel'])) {
    return answerRecovery(dataset);
  }
  if (matchAny(ql, ['strain','effort','intensity'])) {
    return answerStrain(dataset);
  }
  if (matchAny(ql, ['phase','plan','schedule','program'])) {
    return answerPhase();
  }
  if (matchAny(ql, ['calorie','fuel','nutrition','eat'])) {
    return answerNutrition(dataset);
  }
  if (matchAny(ql, ['hello','hi','hey','good morning','what can you'])) {
    return "Hey! I can answer questions about your training data. Try asking:\n• \"Am I ready to train today?\"\n• \"How's my HRV trending?\"\n• \"What's my biggest gap?\"\n• \"Show my best sessions\"";
  }
  return answerFallback(ql, dataset);
}

function matchAny(str, keywords) {
  return keywords.some(function(k) { return str.includes(k); });
}

// ── Individual Answer Functions ───────────────────────────────────────────────
function answerReadiness(dataset) {
  var latest = getLatestEntry(dataset);
  if (!latest || !latest.recovery) {
    return "I don't have today's recovery data yet — tap 📝 Log Today to enter your Whoop numbers and I'll give you a precise readiness score.";
  }
  var rec = latest.recovery; var hrv = latest.hrv; var rhr = latest.rhr;
  var recLabel = rec >= 67 ? '🟢 Green' : rec >= 34 ? '🟡 Yellow' : '🔴 Red';
  var advice = rec >= 67
    ? "You're fully ready — schedule your hardest planned session. Don't waste a green day!"
    : rec >= 34
    ? "Moderate readiness. Train as planned but pull back if RPE feels harder than usual. Skip any high-intensity extras."
    : "Red zone — your body needs recovery today. Switch to a 30-min easy swim or yoga. Hard training on red will dig you into a hole.";

  return "Readiness check for " + latest.date + ":\n\n" +
    "• Recovery: " + recLabel + " — " + rec + "%\n" +
    (hrv ? "• HRV: " + hrv + " ms (baseline: 34 ms)\n" : "") +
    (rhr ? "• Resting HR: " + rhr + " bpm\n" : "") +
    "\n🧑‍🏫 Coach says: " + advice;
}

function answerSleep(dataset) {
  var recent = dataset.filter(function(d) { return d.sleep_dur && d.sleep_need; }).slice(-7);
  if (!recent.length) return "No sleep data available yet. Log your Whoop data to get sleep analysis.";
  var avgGot  = recent.reduce(function(s,d) { return s + d.sleep_dur; }, 0) / recent.length / 60;
  var avgNeed = recent.reduce(function(s,d) { return s + d.sleep_need; }, 0) / recent.length / 60;
  var deficit = avgNeed - avgGot;
  var trend = deficit > 2 ? "⚠️ Chronic sleep debt is your #1 performance limiter right now." : "Sleep debt is manageable — keep pushing for consistency.";
  return "Sleep analysis — last " + recent.length + " days:\n\n" +
    "• Avg got: " + avgGot.toFixed(1) + " hrs\n" +
    "• Avg needed: " + avgNeed.toFixed(1) + " hrs\n" +
    "• Daily deficit: " + deficit.toFixed(1) + " hrs\n\n" +
    trend + "\n\n🧑‍🏫 Coach: Set a 9:30pm bedtime alarm — not for waking up, for going to bed. Sleep is when your body adapts to training load.";
}

function answerHRV(dataset) {
  var withHRV = dataset.filter(function(d) { return d.hrv; });
  if (!withHRV.length) return "No HRV data found yet.";
  var avg30 = withHRV.slice(-30).reduce(function(s,d) { return s + d.hrv; }, 0) / Math.min(withHRV.length, 30);
  var latest = withHRV.slice(-1)[0];
  var recent7 = withHRV.slice(-7).reduce(function(s,d) { return s + d.hrv; }, 0) / Math.min(withHRV.slice(-7).length, 7);
  var trend = recent7 > avg30 ? "📈 Trending UP — your body is adapting well." : "📉 Trending DOWN — consider a recovery day or more sleep.";
  return "HRV analysis:\n\n" +
    "• Latest: " + latest.hrv + " ms\n" +
    "• 7-day avg: " + recent7.toFixed(0) + " ms\n" +
    "• 30-day baseline: " + avg30.toFixed(0) + " ms\n" +
    "• " + trend + "\n\n" +
    "🧑‍🏫 Target: Reach 40+ ms by race day through better sleep and consistent Z2 training.";
}

function answerRace() {
  var raceDate = new Date('2026-10-04');
  var now = new Date(); now.setHours(0,0,0,0);
  var days = Math.ceil((raceDate - now) / 86400000);
  var weeks = Math.floor(days / 7);
  var phase = days > 111 ? '1 — Base 🏗️' : days > 69 ? '2 — Build 💪' : days > 27 ? '3 — Peak 🔥' : '4 — Taper ⬇️';
  return "⏱️ Race countdown:\n\n" +
    "• " + days + " days to Ironman Maryland\n" +
    "• " + weeks + " full weeks remaining\n" +
    "• Current: Phase " + phase + "\n\n" +
    "Race date: Oct 4, 2026 · Cambridge, MD\n" +
    "3.86km swim → 180km bike → 42.2km run\n\n" +
    "🧑‍🏫 Every session you do now compounds. The athletes who race well in October are built in June and July.";
}

function answerBestSessions(dataset) {
  var workouts = [];
  dataset.forEach(function(d) {
    (d.workouts || []).forEach(function(w) {
      if (w.strain) workouts.push(Object.assign({}, w, { date: d.date, recovery: d.recovery }));
    });
  });
  if (!workouts.length) return "No workout sessions found yet.";
  workouts.sort(function(a,b) { return b.strain - a.strain; });
  var top3 = workouts.slice(0, 3);
  var lines = top3.map(function(w, i) {
    return (i+1) + ". " + w.date + " · " + w.activity + " · Strain " + (+w.strain).toFixed(1) +
      (w.duration ? " · " + w.duration + " min" : "") +
      (w.avg_hr ? " · " + w.avg_hr + "♥" : "");
  });
  var highRecovery = dataset.filter(function(d) { return d.recovery >= 80; });
  return "🏆 Top 3 hardest sessions:\n\n" + lines.join("\n") +
    "\n\n• Best recovery day: " + (highRecovery.length ? highRecovery.sort(function(a,b){return b.recovery-a.recovery;})[0].date + " — " + highRecovery[0].recovery + "%" : "none yet") +
    "\n\n🧑‍🏫 High strain on high recovery = peak adaptation. That's the formula.";
}

function answerGaps(dataset) {
  var workouts = [];
  dataset.forEach(function(d) { (d.workouts || []).forEach(function(w) { workouts.push(w); }); });
  var counts = { swim: 0, bike: 0, run: 0 };
  var durations = { swim: 0, bike: 0, run: 0 };
  workouts.forEach(function(w) {
    var a = (w.activity || '').toLowerCase();
    if (a.includes('swim')) { counts.swim++; durations.swim += w.duration || 0; }
    else if (a.includes('cycl') || a.includes('bike') || a.includes('ride')) { counts.bike++; durations.bike += w.duration || 0; }
    else if (a.includes('run')) { counts.run++; durations.run += w.duration || 0; }
  });
  var bikeKm = Math.round(durations.bike * 0.28); // ~28km/hr avg
  var runKm  = Math.round(durations.run * 0.1);   // ~10km/hr avg
  var biggest = counts.bike < counts.swim && counts.bike < counts.run ? 'bike' : counts.run < counts.swim ? 'run' : 'swim';
  return "📊 Training volume breakdown:\n\n" +
    "• 🏊 Swim: " + counts.swim + " sessions · " + durations.swim + " min total\n" +
    "• 🚴 Bike: " + counts.bike + " sessions · ~" + bikeKm + " km\n" +
    "• 🏃 Run: " + counts.run + " sessions · ~" + runKm + " km\n\n" +
    "⚠️ Biggest gap: " + biggest.toUpperCase() + "\n\n" +
    "🧑‍🏫 For Ironman, bike is most athletes' limiter. Target: 3 bike sessions/week by Phase 2.";
}

function answerWeeklySummary(dataset) {
  var weekAgo = new Date(); weekAgo.setDate(weekAgo.getDate() - 7);
  var weekStr = weekAgo.toISOString().split('T')[0];
  var week = dataset.filter(function(d) { return d.date >= weekStr; });
  var workouts = [];
  week.forEach(function(d) { (d.workouts || []).forEach(function(w) { workouts.push(w); }); });
  var avgRec = week.filter(function(d){return d.recovery;}).reduce(function(s,d){return s+d.recovery;},0) /
               (week.filter(function(d){return d.recovery;}).length || 1);
  var totalStrain = week.reduce(function(s,d){return s+(d.strain||0);},0);
  return "📅 This week's summary:\n\n" +
    "• Sessions: " + workouts.length + "\n" +
    "• Avg recovery: " + (avgRec ? avgRec.toFixed(0) + "%" : "—") + "\n" +
    "• Total strain: " + totalStrain.toFixed(1) + "\n" +
    "• Days with data: " + week.length + "\n\n" +
    "🧑‍🏫 Phase 1 target: 5 sessions/week, strain 10–13/session. Log your data daily for better coaching.";
}

function answerSport(dataset, sport) {
  var workouts = [];
  dataset.forEach(function(d) { (d.workouts || []).forEach(function(w) { workouts.push(Object.assign({}, w, {date:d.date})); }); });
  var filtered = workouts.filter(function(w) {
    var a = (w.activity || '').toLowerCase();
    if (sport === 'swim') return a.includes('swim');
    if (sport === 'bike') return a.includes('cycl') || a.includes('bike');
    if (sport === 'run')  return a.includes('run');
    return false;
  });
  if (!filtered.length) return "No " + sport + " sessions found yet.";
  var totalMin = filtered.reduce(function(s,w){return s+(w.duration||0);},0);
  var avgStrain = filtered.reduce(function(s,w){return s+(+w.strain||0);},0) / filtered.length;
  var icons = { swim:'🏊', bike:'🚴', run:'🏃' };
  var targets = {
    swim: "Target: 3×/week, build to 3,800m per session by Phase 3",
    bike: "Target: 3×/week, build to 160km long ride by Phase 3. This is your biggest gap.",
    run:  "Target: 3×/week, keep all easy runs in Z2 (under 145 bpm)"
  };
  return icons[sport] + " " + sport.charAt(0).toUpperCase()+sport.slice(1) + " breakdown:\n\n" +
    "• Sessions: " + filtered.length + "\n" +
    "• Total time: " + totalMin + " min (" + (totalMin/60).toFixed(1) + " hrs)\n" +
    "• Avg session: " + Math.round(totalMin/filtered.length) + " min\n" +
    "• Avg strain: " + avgStrain.toFixed(1) + "\n" +
    "• Last session: " + filtered.slice(-1)[0].date + "\n\n" +
    "🧑‍🏫 " + targets[sport];
}

function answerRecovery(dataset) {
  var withRec = dataset.filter(function(d){return d.recovery;});
  if (!withRec.length) return "No recovery data yet.";
  var avg = withRec.reduce(function(s,d){return s+d.recovery;},0)/withRec.length;
  var green = withRec.filter(function(d){return d.recovery>=67;}).length;
  var yellow = withRec.filter(function(d){return d.recovery>=34&&d.recovery<67;}).length;
  var red = withRec.filter(function(d){return d.recovery<34;}).length;
  var latest = withRec.slice(-1)[0];
  return "💚 Recovery overview (" + withRec.length + " days):\n\n" +
    "• Latest: " + latest.recovery + "% (" + latest.date + ")\n" +
    "• Average: " + avg.toFixed(0) + "%\n" +
    "• 🟢 Green days: " + green + " (" + Math.round(green/withRec.length*100) + "%)\n" +
    "• 🟡 Yellow days: " + yellow + "\n" +
    "• 🔴 Red days: " + red + "\n\n" +
    "🧑‍🏫 Goal: Push average above 65% through better sleep and managed training stress.";
}

function answerStrain(dataset) {
  var recent = dataset.filter(function(d){return d.strain;}).slice(-14);
  if (!recent.length) return "No strain data yet.";
  var avg = recent.reduce(function(s,d){return s+d.strain;},0)/recent.length;
  var max = Math.max.apply(null, recent.map(function(d){return d.strain;}));
  return "🔥 Strain (last 14 days):\n\n" +
    "• Avg daily strain: " + avg.toFixed(1) + "\n" +
    "• Peak strain: " + max.toFixed(1) + "\n\n" +
    "Phase 1 target range: 10–13/session\n\n" +
    "🧑‍🏫 Strain above 16 on back-to-back days without 80%+ recovery = overtraining risk. Monitor closely.";
}

function answerPhase() {
  var days = Math.ceil((new Date('2026-10-04') - new Date()) / 86400000);
  var phase = days > 111 ? 1 : days > 69 ? 2 : days > 27 ? 3 : 4;
  var phaseInfo = [
    null,
    { name:'Base', dates:'Jun 6 – Jul 3', goal:'Build aerobic engine. Z2 only. Establish bike routine.', strain:'10–13' },
    { name:'Build', dates:'Jul 4 – Aug 14', goal:'Extend bike to 120km, add bricks, introduce HIIT.', strain:'13–16' },
    { name:'Peak', dates:'Aug 15 – Sep 11', goal:'Race simulation, 160km bike, 30km run. Peak volume.', strain:'15–18' },
    { name:'Taper', dates:'Sep 12 – Oct 4', goal:'Reduce volume 40–60%. Preserve fitness. Trust training.', strain:'7–12' }
  ];
  var p = phaseInfo[phase];
  return "📅 Current training phase:\n\n" +
    "Phase " + phase + " — " + p.name + "\n" +
    "📆 " + p.dates + "\n\n" +
    "Goal: " + p.goal + "\n" +
    "Strain target: " + p.strain + "/session\n\n" +
    "🧑‍🏫 Tap the 📅 Plan tab for full week-by-week sessions.";
}

function answerNutrition(dataset) {
  var cals = dataset.filter(function(d){return d.calories;}).slice(-7);
  var avg = cals.length ? cals.reduce(function(s,d){return s+d.calories;},0)/cals.length : 0;
  return "🥤 Nutrition snapshot:\n\n" +
    (avg ? "• Avg daily calories: " + avg.toFixed(0) + " cal (last 7 days)\n\n" : "") +
    "Race day fuelling targets:\n" +
    "• Bike: 60–80g carbs/hr\n" +
    "• Run: 40–60g carbs/hr\n" +
    "• Hydration: 500–750ml/hr\n\n" +
    "🧑‍🏫 Start practicing race nutrition NOW on your long bike sessions. Your gut needs training too — GI issues are the #1 DNF cause in Ironman.";
}

function answerFallback(q, dataset) {
  var days = Math.ceil((new Date('2026-10-04') - new Date()) / 86400000);
  var latest = getLatestEntry(dataset);
  return "I'm not sure about that specific question. Here's what I can tell you:\n\n" +
    "• " + days + " days to race day\n" +
    (latest && latest.recovery ? "• Latest recovery: " + latest.recovery + "%\n" : "") +
    "\nTry asking:\n" +
    "• \"Am I ready to train today?\"\n" +
    "• \"How's my sleep?\"\n" +
    "• \"What's my biggest gap?\"\n" +
    "• \"How's my HRV trending?\"";
}
ry":37,"hrv":29,"rhr":62,"strain":4.1,"calories":1597,"sleep_dur":338,"sleep_need":593,"workouts":[]},{"date":"2026-05-08","recovery":28,"hrv":26,"rhr":70,"strain":12.6,"calories":1901,"sleep_dur":449,"sleep_need":598,"workouts":[{"activity":"Swimming","duration":58,"strain":12.1,"calories":555,"avg_hr":135,"max_hr":175}]},{"date":"2026-05-09","recovery":null,"hrv":null,"rhr":null,"strain":12.3,"calories":null,"sleep_dur":null,"sleep_need":null,"workouts":[{"activity":"Functional Fitness","duration":66,"strain":12.3,"calories":236,"avg_hr":108,"max_hr":142}]},{"date":"2026-05-10","recovery":65,"hrv":34,"rhr":63,"strain":11.7,"calories":1801,"sleep_dur":412,"sleep_need":565,"workouts":[{"activity":"Functional Fitness","duration":62,"strain":11.6,"calories":132,"avg_hr":100,"max_hr":135}]},{"date":"2026-05-11","recovery":27,"hrv":29,"rhr":66,"strain":13.3,"calories":2213,"sleep_dur":283,"sleep_need":563,"workouts":[{"activity":"Swimming","duration":65,"strain":12.4,"calories":589,"avg_hr":132,"max_hr":167}]},{"date":"2026-05-13","recovery":63,"hrv":32,"rhr":63,"strain":4.5,"calories":1677,"sleep_dur":376,"sleep_need":571,"workouts":[]},{"date":"2026-05-14","recovery":78,"hrv":36,"rhr":63,"strain":12.9,"calories":2311,"sleep_dur":399,"sleep_need":564,"workouts":[]},{"date":"2026-05-15","recovery":90,"hrv":43,"rhr":65,"strain":12.1,"calories":1834,"sleep_dur":378,"sleep_need":576,"workouts":[{"activity":"Swimming","duration":57,"strain":12.1,"calories":528,"avg_hr":133,"max_hr":175}]},{"date":"2026-05-16","recovery":54,"hrv":31,"rhr":62,"strain":9.5,"calories":1911,"sleep_dur":353,"sleep_need":550,"workouts":[{"activity":"Functional Fitness","duration":63,"strain":11.8,"calories":161,"avg_hr":103,"max_hr":144}]},{"date":"2026-05-17","recovery":47,"hrv":38,"rhr":62,"strain":3.7,"calories":1771,"sleep_dur":190,"sleep_need":420,"workouts":[{"activity":"Swimming","duration":37,"strain":9.8,"calories":146,"avg_hr":106,"max_hr":154}]},{"date":"2026-05-18","recovery":77,"hrv":39,"rhr":61,"strain":12.1,"calories":1758,"sleep_dur":333,"sleep_need":547,"workouts":[]},{"date":"2026-05-19","recovery":92,"hrv":41,"rhr":59,"strain":3.2,"calories":1710,"sleep_dur":454,"sleep_need":574,"workouts":[{"activity":"Functional Fitness","duration":57,"strain":11.8,"calories":183,"avg_hr":107,"max_hr":139}]},{"date":"2026-05-20","recovery":74,"hrv":35,"rhr":62,"strain":9.9,"calories":2060,"sleep_dur":392,"sleep_need":525,"workouts":[]},{"date":"2026-05-21","recovery":85,"hrv":39,"rhr":61,"strain":11.7,"calories":2157,"sleep_dur":401,"sleep_need":544,"workouts":[{"activity":"Swimming","duration":41,"strain":8.6,"calories":329,"avg_hr":128,"max_hr":163}]},{"date":"2026-05-22","recovery":71,"hrv":34,"rhr":69,"strain":16.8,"calories":2535,"sleep_dur":425,"sleep_need":557,"workouts":[{"activity":"Swimming","duration":41,"strain":9.7,"calories":367,"avg_hr":131,"max_hr":172}]},{"date":"2026-05-23","recovery":null,"hrv":null,"rhr":null,"strain":14.4,"calories":null,"sleep_dur":null,"sleep_need":null,"workouts":[{"activity":"HIIT","duration":41,"strain":14.4,"calories":512,"avg_hr":147,"max_hr":169},{"activity":"Functional Fitness","duration":46,"strain":11.5,"calories":252,"avg_hr":117,"max_hr":155}]},{"date":"2026-05-24","recovery":83,"hrv":38,"rhr":62,"strain":12.2,"calories":1914,"sleep_dur":419,"sleep_need":581,"workouts":[{"activity":"Functional Fitness","duration":58,"strain":11.5,"calories":127,"avg_hr":102,"max_hr":133}]},{"date":"2026-05-25","recovery":94,"hrv":44,"rhr":63,"strain":12.1,"calories":2170,"sleep_dur":381,"sleep_need":547,"workouts":[{"activity":"Swimming","duration":67,"strain":11.1,"calories":570,"avg_hr":130,"max_hr":159}]},{"date":"2026-05-26","recovery":49,"hrv":33,"rhr":66,"strain":10,"calories":2133,"sleep_dur":432,"sleep_need":552,"workouts":[{"activity":"Cycling","duration":60,"strain":7.5,"calories":306,"avg_hr":116,"max_hr":140}]},{"date":"2026-05-27","recovery":null,"hrv":null,"rhr":null,"strain":9,"calories":null,"sleep_dur":null,"sleep_need":null,"workouts":[{"activity":"Swimming","duration":36,"strain":9,"calories":323,"avg_hr":132,"max_hr":164}]},{"date":"2026-05-28","recovery":73,"hrv":38,"rhr":60,"strain":4.8,"calories":1684,"sleep_dur":365,"sleep_need":536,"workouts":[{"activity":"HIIT","duration":13,"strain":4.3,"calories":32,"avg_hr":96,"max_hr":155}]},{"date":"2026-05-29","recovery":null,"hrv":null,"rhr":null,"strain":12.7,"calories":null,"sleep_dur":null,"sleep_need":null,"workouts":[{"activity":"Swimming","duration":53,"strain":12.7,"calories":557,"avg_hr":139,"max_hr":169}]},{"date":"2026-05-30","recovery":35,"hrv":30,"rhr":66,"strain":12.4,"calories":1807,"sleep_dur":335,"sleep_need":596,"workouts":[{"activity":"Functional Fitness","duration":77,"strain":12,"calories":206,"avg_hr":101,"max_hr":136}]},{"date":"2026-05-31","recovery":36,"hrv":28,"rhr":71,"strain":4,"calories":1619,"sleep_dur":439,"sleep_need":596,"workouts":[]},{"date":"2026-06-01","recovery":67,"hrv":35,"rhr":62,"strain":13.6,"calories":2208,"sleep_dur":362,"sleep_need":571,"workouts":[{"activity":"Swimming","duration":51,"strain":10.6,"calories":459,"avg_hr":132,"max_hr":167}]},{"date":"2026-06-02","recovery":null,"hrv":null,"rhr":null,"strain":12.9,"calories":null,"sleep_dur":null,"sleep_need":null,"workouts":[{"activity":"Weightlifting","duration":62,"strain":12.9,"calories":341,"avg_hr":117,"max_hr":152}]},{"date":"2026-06-03","recovery":29,"hrv":28,"rhr":71,"strain":1.9,"calories":1631,"sleep_dur":367,"sleep_need":579,"workouts":[]},{"date":"2026-06-04","recovery":77,"hrv":36,"rhr":64,"strain":12.7,"calories":1803,"sleep_dur":376,"sleep_need":554,"workouts":[{"activity":"Functional Fitness","duration":65,"strain":12.5,"calories":267,"avg_hr":111,"max_hr":146}]},{"date":"2026-06-05","recovery":null,"hrv":null,"rhr":null,"strain":11.4,"calories":null,"sleep_dur":null,"sleep_need":null,"workouts":[{"activity":"Swimming","duration":50,"strain":11.4,"calories":485,"avg_hr":136,"max_hr":164}]},{"date":"2026-06-06","recovery":63,"hrv":32,"rhr":63,"strain":13,"calories":353,"sleep_dur":340,"sleep_need":558,"workouts":[{"activity":"Strength","duration":66,"strain":13,"calories":353,"avg_hr":117,"max_hr":153}]},{"date":"2026-06-07","recovery":87,"hrv":40,"rhr":63,"strain":16.6,"calories":1276,"sleep_dur":390,"sleep_need":589,"workouts":[{"activity":"Cycling","duration":116,"strain":16.6,"calories":1276,"avg_hr":147,"max_hr":163}]},
{"date":"2026-06-08","recovery":68,"hrv":36,"rhr":61,"strain":12.2,"calories":2169,"sleep_dur":378,"sleep_need":null,"workouts":[{"activity":"Swimming","duration":40,"strain":null,"calories":null,"avg_hr":null,"max_hr":null,"distance_yd":2100,"pace":"1:55/100yd"}]},
{"date":"2026-06-09","recovery":79,"hrv":39,"rhr":57,"strain":12.5,"calories":1934,"sleep_dur":390,"sleep_need":null,"workouts":[{"activity":"Weightlifting","duration":60,"strain":null,"calories":null,"avg_hr":null,"max_hr":null}]},
{"date":"2026-06-10","recovery":89,"hrv":43,"rhr":56,"strain":9.3,"calories":1978,"sleep_dur":376,"sleep_need":null,"workouts":[{"activity":"Running","duration":27,"strain":null,"calories":null,"avg_hr":null,"max_hr":null,"distance_mi":2.01,"pace":"13:22/mi"}]},
{"date":"2026-06-11","recovery":19,"hrv":33,"rhr":66,"strain":9.8,"calories":1588,"sleep_dur":318,"sleep_need":null,"workouts":[{"activity":"Weightlifting","duration":48,"strain":null,"calories":null,"avg_hr":85,"max_hr":115}]},
{"date":"2026-06-12","recovery":68,"hrv":35,"rhr":59,"strain":11.1,"calories":null,"sleep_dur":422,"sleep_need":null,"workouts":[{"activity":"Swimming","duration":66,"strain":9.7,"calories":444,"avg_hr":126,"max_hr":null}]}];

// ===========================
// LOCALSTORAGE
// ===========================
const STORAGE_KEY = 'ironman_log_v1';

function getStoredEntries() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); }
  catch (e) { return []; }
}

function saveToStorage(entries) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
}

function buildDataset() {
  const stored = getStoredEntries();
  const merged = rawData.map(d => ({ ...d, workouts: [...(d.workouts || [])] }));

  stored.forEach(function(e) {
    const idx = merged.findIndex(d => d.date === e.date);
    const workouts = e.activity ? [{
      activity: e.activity,
      duration: +e.duration || 0,
      strain: +e.strain || 0,
      calories: +e.calories || 0,
      avg_hr: +e.avgHr || 0,
      max_hr: +e.maxHr || 0
    }] : [];

    const entry = {
      date: e.date,
      recovery: e.recovery ? +e.recovery : null,
      hrv: e.hrv ? +e.hrv : null,
      rhr: e.rhr ? +e.rhr : null,
      strain: e.strain ? +e.strain : null,
      calories: e.calories ? +e.calories : null,
      sleep_dur: e.sleepGot ? +e.sleepGot * 60 : null,
      sleep_need: e.sleepNeed ? +e.sleepNeed * 60 : null,
      workouts: workouts
    };

    if (idx >= 0) {
      const existingWorkouts = merged[idx].workouts || [];
      merged[idx] = Object.assign({}, merged[idx], entry);
      if (workouts.length) merged[idx].workouts = existingWorkouts.concat(workouts);
    } else {
      merged.push(entry);
    }
  });

  merged.sort((a, b) => a.date.localeCompare(b.date));
  return merged;
}

// ===========================
// CHART INSTANCES
// ===========================
var recoveryChart, strainChart, sleepChart;

const actColors = {
  Swimming: '#38bdf8', Cycling: '#f97316', Running: '#3fb950',
  Weightlifting: '#a371f7', 'Functional Fitness': '#a371f7',
  Strength: '#a371f7', HIIT: '#f85149', Brick: '#f97316',
  Walking: '#8b949e', Default: '#8b949e'
};

function renderCharts(dataset) {
  const datesWithData = dataset.filter(d => d.recovery != null);

  if (recoveryChart) recoveryChart.destroy();
  recoveryChart = new Chart(document.getElementById('recoveryChart').getContext('2d'), {
    data: {
      labels: datesWithData.map(d => d.date.slice(5)),
      datasets: [
        {
          type: 'bar', label: 'Recovery %',
          data: datesWithData.map(d => d.recovery),
          backgroundColor: datesWithData.map(d =>
            d.recovery >= 67 ? 'rgba(63,185,80,0.65)' :
            d.recovery >= 34 ? 'rgba(210,153,34,0.65)' :
            'rgba(248,81,73,0.65)'),
          borderRadius: 3, yAxisID: 'y'
        },
        {
          type: 'line', label: 'HRV (ms)',
          data: datesWithData.map(d => d.hrv),
          borderColor: '#38bdf8', backgroundColor: 'rgba(56,189,248,0.1)',
          borderWidth: 2, pointRadius: 3, tension: 0.4, yAxisID: 'y2', fill: false
        }
      ]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { labels: { color: '#8b949e', font: { size: 11 } } } },
      scales: {
        x: { ticks: { color: '#8b949e', font: { size: 10 } }, grid: { color: 'rgba(48,54,61,0.5)' } },
        y: { position: 'left', min: 0, max: 100, ticks: { color: '#8b949e', font: { size: 10 } }, grid: { color: 'rgba(48,54,61,0.3)' } },
        y2: { position: 'right', min: 20, max: 55, ticks: { color: '#38bdf8', font: { size: 10 } }, grid: { display: false } }
      }
    }
  });

  if (strainChart) strainChart.destroy();
  strainChart = new Chart(document.getElementById('strainChart').getContext('2d'), {
    data: {
      labels: dataset.map(d => d.date.slice(5)),
      datasets: [{
        type: 'bar', label: 'Day Strain',
        data: dataset.map(d => d.strain),
        backgroundColor: dataset.map(d => {
          const acts = (d.workouts || []).map(w => w.activity);
          if (acts.includes('Swimming')) return 'rgba(56,189,248,0.7)';
          if (acts.some(a => a === 'Cycling' || a === 'Brick')) return 'rgba(249,115,22,0.7)';
          if (acts.includes('Running')) return 'rgba(63,185,80,0.7)';
          if (acts.includes('HIIT')) return 'rgba(248,81,73,0.7)';
          return 'rgba(163,113,247,0.7)';
        }),
        borderRadius: 3
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: { ticks: { color: '#8b949e', font: { size: 10 } }, grid: { color: 'rgba(48,54,61,0.5)' } },
        y: { min: 0, max: 21, ticks: { color: '#8b949e', font: { size: 10 } }, grid: { color: 'rgba(48,54,61,0.3)' } }
      }
    }
  });

  if (sleepChart) sleepChart.destroy();
  sleepChart = new Chart(document.getElementById('sleepChart').getContext('2d'), {
    data: {
      labels: datesWithData.map(d => d.date.slice(5)),
      datasets: [
        {
          type: 'bar', label: 'Sleep Got (min)',
          data: datesWithData.map(d => d.sleep_dur),
          backgroundColor: 'rgba(163,113,247,0.65)', borderRadius: 3, order: 2
        },
        {
          type: 'line', label: 'Sleep Need (min)',
          data: datesWithData.map(d => d.sleep_need),
          borderColor: '#f85149', borderWidth: 2, borderDash: [5,3],
          pointRadius: 0, tension: 0.3, fill: false, order: 1
        }
      ]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { labels: { color: '#8b949e', font: { size: 11 } } } },
      scales: {
        x: { ticks: { color: '#8b949e', font: { size: 10 } }, grid: { color: 'rgba(48,54,61,0.5)' } },
        y: { min: 100, max: 700, ticks: { color: '#8b949e', font: { size: 10 }, callback: v => (v/60).toFixed(1)+'h' }, grid: { color: 'rgba(48,54,61,0.3)' } }
      }
    }
  });
}

// ===========================
// ACTIVITY LIST
// ===========================
function renderActivityList(dataset) {
  const el = document.getElementById('activityList');
  if (!el) return;
  el.innerHTML = '';
  const workouts = [];
  dataset.forEach(d => (d.workouts || []).forEach(w => workouts.push(Object.assign({}, w, { date: d.date }))));
  workouts.sort((a, b) => b.date.localeCompare(a.date));
  workouts.slice(0, 8).forEach(w => {
    const color = actColors[w.activity] || actColors.Default;
    const div = document.createElement('div');
    div.className = 'activity-row';
    div.innerHTML =
      '<div class="activity-dot" style="background:' + color + '"></div>' +
      '<div class="act-name">' + w.activity + '</div>' +
      '<div class="act-date">' + w.date.slice(5) + '</div>' +
      '<div class="act-stat">' + (w.duration || '--') + ' min' + (w.avg_hr ? ' · ' + w.avg_hr + '♥' : '') + '</div>' +
      '<div class="act-strain">' + (w.strain ? (+w.strain).toFixed(1) : '--') + '</div>';
    el.appendChild(div);
  });
}

// ===========================
// KPI REFRESH
// ===========================
function refreshKPIs(dataset) {
  const latest = dataset.filter(d => d.recovery != null).sort((a, b) => b.date.localeCompare(a.date))[0];
  if (!latest) return;

  const dateLabel = latest.date.slice(5);
  const rec = latest.recovery;
  const recColor = rec >= 67 ? 'var(--green)' : rec >= 34 ? 'var(--yellow)' : 'var(--red)';
  const recIcon = rec >= 67 ? '🟢 Green' : rec >= 34 ? '🟡 Yellow' : '🔴 Red';

  const rvEl = document.getElementById('kpi-recovery-val');
  const rsEl = document.getElementById('kpi-recovery-sub');
  if (rvEl) { rvEl.textContent = rec + '%'; rvEl.style.color = recColor; }
  if (rsEl) rsEl.textContent = dateLabel + ' ' + recIcon + ' · 90-day avg: 58%';

  const hvEl = document.getElementById('kpi-hrv-val');
  const hsEl = document.getElementById('kpi-hrv-sub');
  if (latest.hrv && hvEl) {
    hvEl.textContent = latest.hrv + ' ms';
    if (hsEl) hsEl.textContent = (latest.hrv >= 40 ? '↑ Above baseline' : '↓ Below baseline') + ' · 90-day avg: 34 ms';
  }

  const rrEl = document.getElementById('kpi-rhr-val');
  if (latest.rhr && rrEl) rrEl.textContent = latest.rhr + ' bpm';

  const srEl = document.getElementById('kpi-strain-val');
  if (latest.strain && srEl) srEl.textContent = (+latest.strain).toFixed(1);

  const slEl = document.getElementById('kpi-sleep-val');
  const ssEl = document.getElementById('kpi-sleep-sub');
  if (latest.sleep_dur && slEl) {
    const got = (latest.sleep_dur / 60).toFixed(1);
    const need = latest.sleep_need ? (latest.sleep_need / 60).toFixed(1) : '9.5';
    const deficit = Math.max(0, need - got).toFixed(1);
    slEl.textContent = got + ' hrs';
    if (ssEl) ssEl.textContent = dateLabel + ' · Need ' + need + ' hrs · Deficit ' + deficit + ' hrs';
  }

  const luEl = document.getElementById('lastUpdated');
  if (luEl) luEl.textContent = latest.date;
}

// ===========================
// LOG HISTORY
// ===========================
function renderLogHistory() {
  const stored = getStoredEntries().sort((a, b) => b.date.localeCompare(a.date));
  const container = document.getElementById('logHistoryContainer');
  const countEl = document.getElementById('logCount');
  if (countEl) countEl.textContent = stored.length + (stored.length === 1 ? ' entry' : ' entries');
  if (!container) return;

  if (stored.length === 0) {
    container.innerHTML = '<div class="empty-log">No entries yet. Click <strong>"📝 Log Today"</strong> after each session to build your training history.</div>';
    return;
  }

  const rows = stored.map(function(e) {
    const recColor = !e.recovery ? '#8b949e' :
      +e.recovery >= 67 ? '#3fb950' :
      +e.recovery >= 34 ? '#d29922' : '#f85149';
    return '<tr>' +
      '<td style="font-weight:600;">' + e.date + '</td>' +
      '<td style="color:' + recColor + ';font-weight:700;">' + (e.recovery ? e.recovery + '%' : '—') + '</td>' +
      '<td style="color:#38bdf8;">' + (e.hrv ? e.hrv + ' ms' : '—') + '</td>' +
      '<td style="color:#a371f7;">' + (e.sleepGot ? e.sleepGot + ' h' : '—') + '</td>' +
      '<td>' + (e.activity || '<span style="color:#8b949e;">Rest</span>') + '</td>' +
      '<td>' + (e.duration ? e.duration + ' min' : '—') + '</td>' +
      '<td style="color:#f97316;">' + (e.strain ? (+e.strain).toFixed(1) : '—') + '</td>' +
      '<td>' + (e.rpe ? e.rpe + '/10' : '—') + '</td>' +
      '<td style="color:#8b949e;font-size:11px;max-width:160px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">' + (e.notes || '') + '</td>' +
      '<td><button onclick="deleteLogEntry(\'' + e.date + '\')" style="background:none;border:none;color:#8b949e;cursor:pointer;font-size:12px;padding:2px 6px;" title="Delete">✕</button></td>' +
      '</tr>';
  }).join('');

  container.innerHTML =
    '<table class="log-history-table"><thead><tr>' +
    '<th>Date</th><th>Recovery</th><th>HRV</th><th>Sleep</th>' +
    '<th>Activity</th><th>Duration</th><th>Strain</th><th>RPE</th><th>Notes</th><th></th>' +
    '</tr></thead><tbody>' + rows + '</tbody></table>';
}

function deleteLogEntry(date) {
  if (!confirm('Delete entry for ' + date + '?')) return;
  const stored = getStoredEntries().filter(e => e.date !== date);
  saveToStorage(stored);
  refresh();
  showToast('🗑️ Entry deleted');
}

// ===========================
// MODAL
// ===========================
function openLogModal() {
  const today = new Date().toISOString().split('T')[0];
  document.getElementById('log-date').value = today;
  document.getElementById('log-rpe').value = 5;
  document.getElementById('rpeDisplay').textContent = '5/10';

  const stored = getStoredEntries();
  const existing = stored.find(e => e.date === today);
  const fields = ['recovery','hrv','rhr','strain','sleep-got','sleep-need',
    'duration','distance','calories','avg-hr','max-hr','notes'];

  if (existing) {
    const map = { recovery: 'recovery', hrv: 'hrv', rhr: 'rhr', strain: 'strain',
      'sleep-got': 'sleepGot', 'sleep-need': 'sleepNeed', duration: 'duration',
      distance: 'distance', calories: 'calories', 'avg-hr': 'avgHr',
      'max-hr': 'maxHr', notes: 'notes' };
    fields.forEach(f => {
      const el = document.getElementById('log-' + f);
      if (el) el.value = existing[map[f]] || '';
    });
    document.getElementById('log-activity').value = existing.activity || '';
    document.getElementById('log-rpe').value = existing.rpe || 5;
    document.getElementById('rpeDisplay').textContent = (existing.rpe || 5) + '/10';
  } else {
    fields.forEach(f => {
      const el = document.getElementById('log-' + f);
      if (el) el.value = '';
    });
    document.getElementById('log-activity').value = '';
  }

  document.getElementById('logOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLogModal() {
  document.getElementById('logOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function overlayClick(e) {
  if (e.target === document.getElementById('logOverlay')) closeLogModal();
}

// ===========================
// SAVE ENTRY
// ===========================
function saveLogEntry() {
  const date = document.getElementById('log-date').value;
  if (!date) { alert('Please select a date'); return; }

  const entry = {
    date: date,
    recovery: document.getElementById('log-recovery').value,
    hrv: document.getElementById('log-hrv').value,
    rhr: document.getElementById('log-rhr').value,
    strain: document.getElementById('log-strain').value,
    sleepGot: document.getElementById('log-sleep-got').value,
    sleepNeed: document.getElementById('log-sleep-need').value,
    activity: document.getElementById('log-activity').value,
    duration: document.getElementById('log-duration').value,
    distance: document.getElementById('log-distance').value,
    calories: document.getElementById('log-calories').value,
    avgHr: document.getElementById('log-avg-hr').value,
    maxHr: document.getElementById('log-max-hr').value,
    rpe: document.getElementById('log-rpe').value,
    notes: document.getElementById('log-notes').value,
    savedAt: new Date().toISOString()
  };

  const stored = getStoredEntries();
  const idx = stored.findIndex(e => e.date === date);
  if (idx >= 0) stored[idx] = entry; else stored.push(entry);
  saveToStorage(stored);

  refresh();
  closeLogModal();
  showToast('✅ Entry saved — charts updated!');
}

// ===========================
// TODAY'S ACTIVITIES CARD
// ===========================
function renderTodayCard() {
  const today = new Date().toISOString().split('T')[0];
  const dateEl = document.getElementById('todayDate');
  const contentEl = document.getElementById('todayContent');

  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const d = new Date();
  if (dateEl) dateEl.textContent = d.getDate() + ' ' + months[d.getMonth()];
  if (!contentEl) return;

  const dataset = buildDataset();
  const entry = dataset.find(function(d) { return d.date === today; });
  const stored = getStoredEntries().find(function(e) { return e.date === today; });

  if (!entry && !stored) {
    contentEl.innerHTML = '<div class="empty-log">No session logged yet today. Tap <strong>+ Log</strong> to record your workout.</div>';
    return;
  }

  const rec = (entry && entry.recovery) || (stored && stored.recovery);
  const hrv = (entry && entry.hrv) || (stored && stored.hrv);
  const strain = (entry && entry.strain) || (stored && stored.strain);
  const workouts = (entry && entry.workouts && entry.workouts.length) ? entry.workouts : [];

  const recColor = !rec ? '#8b949e' : rec >= 67 ? '#3fb950' : rec >= 34 ? '#d29922' : '#f85149';
  const recIcon  = !rec ? '' : rec >= 67 ? '🟢' : rec >= 34 ? '🟡' : '🔴';

  var html = '<div style="display:flex; gap:16px; flex-wrap:wrap; margin-bottom:12px;">';
  if (rec) html += '<div style="background:var(--surface2);border:1px solid var(--border);border-radius:8px;padding:10px 16px;text-align:center;">' +
    '<div style="font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;">Recovery</div>' +
    '<div style="font-size:22px;font-weight:700;color:' + recColor + ';">' + rec + '%&nbsp;' + recIcon + '</div></div>';
  if (hrv) html += '<div style="background:var(--surface2);border:1px solid var(--border);border-radius:8px;padding:10px 16px;text-align:center;">' +
    '<div style="font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;">HRV</div>' +
    '<div style="font-size:22px;font-weight:700;color:var(--accent2);">' + hrv + ' ms</div></div>';
  if (strain) html += '<div style="background:var(--surface2);border:1px solid var(--border);border-radius:8px;padding:10px 16px;text-align:center;">' +
    '<div style="font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;">Strain</div>' +
    '<div style="font-size:22px;font-weight:700;color:var(--accent);">' + (+strain).toFixed(1) + '</div></div>';
  if (stored && stored.sleepGot) html += '<div style="background:var(--surface2);border:1px solid var(--border);border-radius:8px;padding:10px 16px;text-align:center;">' +
    '<div style="font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;">Sleep</div>' +
    '<div style="font-size:22px;font-weight:700;color:var(--purple);">' + stored.sleepGot + ' hrs</div></div>';
  html += '</div>';

  if (workouts.length) {
    html += '<div class="activity-list">';
    workouts.forEach(function(w) {
      var color = actColors[w.activity] || actColors.Default;
      html += '<div class="activity-row">' +
        '<div class="activity-dot" style="background:' + color + '"></div>' +
        '<div class="act-name">' + w.activity + '</div>' +
        '<div class="act-stat">' + (w.duration || '--') + ' min' + (w.avg_hr ? ' · ' + w.avg_hr + '♥' : '') + '</div>' +
        '<div class="act-strain">' + (w.strain ? (+w.strain).toFixed(1) : '--') + '</div>' +
        '</div>';
    });
    html += '</div>';
  } else if (!rec && !hrv) {
    html += '<div class="empty-log">No session logged yet today. Tap <strong>+ Log</strong> to record your workout.</div>';
  }

  if (stored && stored.notes) {
    html += '<div style="margin-top:10px;font-size:12px;color:var(--muted);padding:8px 12px;background:var(--surface2);border-radius:6px;">📝 ' + stored.notes + '</div>';
  }

  contentEl.innerHTML = html;
}

// ===========================
// REFRESH ALL
// ===========================
function refresh() {
  const dataset = buildDataset();
  renderCharts(dataset);
  renderActivityList(dataset);
  renderLogHistory();
  refreshKPIs(dataset);
  renderTodayCard();
}

// ===========================
// TOAST
// ===========================
function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

// ===========================
// SECTION NAV
// ===========================
var SECTIONS = ['today', 'trends', 'plan', 'race', 'log'];

function showSection(name) {
  SECTIONS.forEach(function(s) {
    var panel = document.getElementById('section-' + s);
    var btn   = document.getElementById('nav-' + s);
    if (panel) panel.className = 'section-panel' + (s === name ? ' active' : '');
    if (btn)   btn.className   = 'nav-btn'        + (s === name ? ' active' : '');
  });
  // Re-render charts when Trends tab becomes visible (they need visible canvas)
  if (name === 'trends') {
    var dataset = buildDataset();
    renderCharts(dataset);
  }
  // Scroll to top of container
  var container = document.querySelector('.container');
  if (container) container.scrollIntoView({ behavior: 'smooth', block: 'start' });
  try { localStorage.setItem('activeSection', name); } catch(e) {}
}

// ===========================
// PHASE TABS
// ===========================
function showPhase(n) {
  document.querySelectorAll('.phase-content').forEach(el => el.classList.remove('visible'));
  document.querySelectorAll('.phase-tab').forEach(el => el.classList.remove('active'));
  document.getElementById('phase-' + n).classList.add('visible');
  document.querySelectorAll('.phase-tab')[n - 1].classList.add('active');
}

// ===========================
// COUNTDOWN
// ===========================
(function() {
  const raceDate = new Date('2026-10-04T00:00:00');
  const now = new Date(); now.setHours(0,0,0,0);
  const days = Math.ceil((raceDate - now) / 86400000);
  const el = document.getElementById('countdown-days');
  if (el) el.textContent = days;

  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const fd = document.getElementById('footerDate');
  const d = new Date();
  if (fd) fd.textContent = d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear();
})();

// ===========================
// PWA
// ===========================
var deferredPrompt = null;
window.addEventListener('beforeinstallprompt', function(e) {
  e.preventDefault();
  deferredPrompt = e;
  const btn = document.getElementById('installBtn');
  if (btn) btn.classList.add('visible');
});

function installPWA() {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  deferredPrompt.userChoice.then(function() {
    deferredPrompt = null;
    const btn = document.getElementById('installBtn');
    if (btn) btn.classList.remove('visible');
  });
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js').catch(function() {});
}

// ===========================
// INIT
// ===========================
refresh();
// Restore last active tab (default: today)
try {
  var savedSection = localStorage.getItem('activeSection') || 'today';
  if (SECTIONS.indexOf(savedSection) >= 0) showSection(savedSection);
} catch(e) { showSection('today'); }

// ===========================
// AI COACH CHATBOT
// ===========================
var chatOpen = false;
var chatHistory = [];

function toggleChat() {
  chatOpen = !chatOpen;
  var panel = document.getElementById('chatPanel');
  if (panel) panel.classList.toggle('open', chatOpen);
  if (chatOpen && chatHistory.length === 0) {
    setTimeout(function() { chatBotGreet(); }, 300);
  }
  if (chatOpen) {
    setTimeout(function() {
      var inp = document.getElementById('chatInput');
      if (inp) inp.focus();
    }, 400);
  }
}

function chatBotGreet() {
  var dataset = buildDataset();
  var daysToRace = Math.ceil((new Date('2026-10-04') - new Date()) / 86400000);
  var latest = dataset.filter(function(d) { return d.recovery != null; }).slice(-1)[0];
  var rec = latest ? latest.recovery : null;
  var recText = rec ? (rec >= 67 ? '🟢 ' + rec + '% — green zone' : rec >= 34 ? '🟡 ' + rec + '% — yellow zone' : '🔴 ' + rec + '% — red zone') : 'not logged yet';

  chatAddMessage('bot',
    "Hey Sri! 👋 I'm your AI Coach — I know all your Whoop data.\n\n" +
    "Quick snapshot:\n" +
    "• Latest recovery: " + recText + "\n" +
    "• Days to Ironman Maryland: " + daysToRace + " days\n" +
    "• Current phase: Phase 1 — Base 🏗️\n\n" +
    "Ask me anything about your training, or tap a quick question below."
  );
}

function chatSend() {
  var inp = document.getElementById('chatInput');
  if (!inp || !inp.value.trim()) return;
  var q = inp.value.trim();
  inp.value = '';
  chatAsk(q);
}

function chatAsk(question) {
  chatAddMessage('user', question);
  // Show typing indicator
  var typingId = chatAddTyping();
  setTimeout(function() {
    removeTyping(typingId);
    var answer = chatRespond(question);
    chatAddMessage('bot', answer);
  }, 600 + Math.random() * 400);
  // Make sure panel is open
  if (!chatOpen) toggleChat();
}

function chatAddMessage(role, text) {
  var msgs = document.getElementById('chatMessages');
  if (!msgs) return;
  var div = document.createElement('div');
  div.className = 'chat-msg ' + role;
  var avatarHtml = role === 'bot'
    ? '<div class="chat-msg-avatar">🏊</div>'
    : '';
  // Convert \n to <br>
  var formatted = text.replace(/\n/g, '<br>');
  div.innerHTML = avatarHtml + '<div class="chat-bubble">' + formatted + '</div>';
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
  chatHistory.push({ role: role, text: text });
}

function chatAddTyping() {
  var msgs = document.getElementById('chatMessages');
  if (!msgs) return null;
  var id = 'typing-' + Date.now();
  var div = document.createElement('div');
  div.className = 'chat-msg bot';
  div.id = id;
  div.innerHTML = '<div class="chat-msg-avatar">🏊</div><div class="chat-bubble"><div class="chat-typing"><span></span><span></span><span></span></div></div>';
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
  return id;
}

function removeTyping(id) {
  if (!id) return;
  var el = document.getElementById(id);
  if (el) el.remove();
}

// ── Response Engine ───────────────────────────────────────────────────────────
function chatRespond(q) {
  var ql = q.toLowerCase();
  var dataset = buildDataset();

  if (matchAny(ql, ['ready','train today','readiness','should i train','can i train'])) {
    return answerReadiness(dataset);
  }
  if (matchAny(ql, ['sleep','rest','tired','fatigue'])) {
    return answerSleep(dataset);
  }
  if (matchAny(ql, ['hrv','heart rate variability'])) {
    return answerHRV(dataset);
  }
  if (matchAny(ql, ['race','days to','countdown','maryland','ironman'])) {
    return answerRace();
  }
  if (matchAny(ql, ['best session','top session','best workout','personal best','pr'])) {
    return answerBestSessions(dataset);
  }
  if (matchAny(ql, ['gap','weak','missing','behind','behind on'])) {
    return answerGaps(dataset);
  }
  if (matchAny(ql, ['week','this week','weekly','summary'])) {
    return answerWeeklySummary(dataset);
  }
  if (matchAny(ql, ['swim','swimming','pool'])) {
    return answerSport(dataset, 'swim');
  }
  if (matchAny(ql, ['bike','cycling','cycle','ride'])) {
    return answerSport(dataset, 'bike');
  }
  if (matchAny(ql, ['run','running','jog'])) {
    return answerSport(dataset, 'run');
  }
  if (matchAny(ql, ['recovery','recover','feel'])) {
    return answerRecovery(dataset);
  }
  if (matchAny(ql, ['strain','effort','intensity'])) {
    return answerStrain(dataset);
  }
  if (matchAny(ql, ['phase','plan','schedule','program'])) {
    return answerPhase();
  }
  if (matchAny(ql, ['calorie','fuel','nutrition','eat'])) {
    return answerNutrition(dataset);
  }
  if (matchAny(ql, ['hello','hi','hey','good morning','what can you'])) {
    return "Hey! I can answer questions about your training data. Try asking:\n• \"Am I ready to train today?\"\n• \"How's my HRV trending?\"\n• \"What's my biggest gap?\"\n• \"Show my best sessions\"";
  }
  return answerFallback(ql, dataset);
}

function matchAny(str, keywords) {
  return keywords.some(function(k) { return str.includes(k); });
}

// ── Individual Answer Functions ───────────────────────────────────────────────
function answerReadiness(dataset) {
  var latest = getLatestEntry(dataset);
  if (!latest || !latest.recovery) {
    return "I don't have today's recovery data yet — tap 📝 Log Today to enter your Whoop numbers and I'll give you a precise readiness score.";
  }
  var rec = latest.recovery; var hrv = latest.hrv; var rhr = latest.rhr;
  var recLabel = rec >= 67 ? '🟢 Green' : rec >= 34 ? '🟡 Yellow' : '🔴 Red';
  var advice = rec >= 67
    ? "You're fully ready — schedule your hardest planned session. Don't waste a green day!"
    : rec >= 34
    ? "Moderate readiness. Train as planned but pull back if RPE feels harder than usual. Skip any high-intensity extras."
    : "Red zone — your body needs recovery today. Switch to a 30-min easy swim or yoga. Hard training on red will dig you into a hole.";

  return "Readiness check for " + latest.date + ":\n\n" +
    "• Recovery: " + recLabel + " — " + rec + "%\n" +
    (hrv ? "• HRV: " + hrv + " ms (baseline: 34 ms)\n" : "") +
    (rhr ? "• Resting HR: " + rhr + " bpm\n" : "") +
    "\n🧑‍🏫 Coach says: " + advice;
}

function answerSleep(dataset) {
  var recent = dataset.filter(function(d) { return d.sleep_dur && d.sleep_need; }).slice(-7);
  if (!recent.length) return "No sleep data available yet. Log your Whoop data to get sleep analysis.";
  var avgGot  = recent.reduce(function(s,d) { return s + d.sleep_dur; }, 0) / recent.length / 60;
  var avgNeed = recent.reduce(function(s,d) { return s + d.sleep_need; }, 0) / recent.length / 60;
  var deficit = avgNeed - avgGot;
  var trend = deficit > 2 ? "⚠️ Chronic sleep debt is your #1 performance limiter right now." : "Sleep debt is manageable — keep pushing for consistency.";
  return "Sleep analysis — last " + recent.length + " days:\n\n" +
    "• Avg got: " + avgGot.toFixed(1) + " hrs\n" +
    "• Avg needed: " + avgNeed.toFixed(1) + " hrs\n" +
    "• Daily deficit: " + deficit.toFixed(1) + " hrs\n\n" +
    trend + "\n\n🧑‍🏫 Coach: Set a 9:30pm bedtime alarm — not for waking up, for going to bed. Sleep is when your body adapts to training load.";
}

function answerHRV(dataset) {
  var withHRV = dataset.filter(function(d) { return d.hrv; });
  if (!withHRV.length) return "No HRV data found yet.";
  var avg30 = withHRV.slice(-30).reduce(function(s,d) { return s + d.hrv; }, 0) / Math.min(withHRV.length, 30);
  var latest = withHRV.slice(-1)[0];
  var recent7 = withHRV.slice(-7).reduce(function(s,d) { return s + d.hrv; }, 0) / Math.min(withHRV.slice(-7).length, 7);
  var trend = recent7 > avg30 ? "📈 Trending UP — your body is adapting well." : "📉 Trending DOWN — consider a recovery day or more sleep.";
  return "HRV analysis:\n\n" +
    "• Latest: " + latest.hrv + " ms\n" +
    "• 7-day avg: " + recent7.toFixed(0) + " ms\n" +
    "• 30-day baseline: " + avg30.toFixed(0) + " ms\n" +
    "• " + trend + "\n\n" +
    "🧑‍🏫 Target: Reach 40+ ms by race day through better sleep and consistent Z2 training.";
}

function answerRace() {
  var raceDate = new Date('2026-10-04');
  var now = new Date(); now.setHours(0,0,0,0);
  var days = Math.ceil((raceDate - now) / 86400000);
  var weeks = Math.floor(days / 7);
  var phase = days > 111 ? '1 — Base 🏗️' : days > 69 ? '2 — Build 💪' : days > 27 ? '3 — Peak 🔥' : '4 — Taper ⬇️';
  return "⏱️ Race countdown:\n\n" +
    "• " + days + " days to Ironman Maryland\n" +
    "• " + weeks + " full weeks remaining\n" +
    "• Current: Phase " + phase + "\n\n" +
    "Race date: Oct 4, 2026 · Cambridge, MD\n" +
    "3.86km swim → 180km bike → 42.2km run\n\n" +
    "🧑‍🏫 Every session you do now compounds. The athletes who race well in October are built in June and July.";
}

function answerBestSessions(dataset) {
  var workouts = [];
  dataset.forEach(function(d) {
    (d.workouts || []).forEach(function(w) {
      if (w.strain) workouts.push(Object.assign({}, w, { date: d.date, recovery: d.recovery }));
    });
  });
  if (!workouts.length) return "No workout sessions found yet.";
  workouts.sort(function(a,b) { return b.strain - a.strain; });
  var top3 = workouts.slice(0, 3);
  var lines = top3.map(function(w, i) {
    return (i+1) + ". " + w.date + " · " + w.activity + " · Strain " + (+w.strain).toFixed(1) +
      (w.duration ? " · " + w.duration + " min" : "") +
      (w.avg_hr ? " · " + w.avg_hr + "♥" : "");
  });
  var highRecovery = dataset.filter(function(d) { return d.recovery >= 80; });
  return "🏆 Top 3 hardest sessions:\n\n" + lines.join("\n") +
    "\n\n• Best recovery day: " + (highRecovery.length ? highRecovery.sort(function(a,b){return b.recovery-a.recovery;})[0].date + " — " + highRecovery[0].recovery + "%" : "none yet") +
    "\n\n🧑‍🏫 High strain on high recovery = peak adaptation. That's the formula.";
}

function answerGaps(dataset) {
  var workouts = [];
  dataset.forEach(function(d) { (d.workouts || []).forEach(function(w) { workouts.push(w); }); });
  var counts = { swim: 0, bike: 0, run: 0 };
  var durations = { swim: 0, bike: 0, run: 0 };
  workouts.forEach(function(w) {
    var a = (w.activity || '').toLowerCase();
    if (a.includes('swim')) { counts.swim++; durations.swim += w.duration || 0; }
    else if (a.includes('cycl') || a.includes('bike') || a.includes('ride')) { counts.bike++; durations.bike += w.duration || 0; }
    else if (a.includes('run')) { counts.run++; durations.run += w.duration || 0; }
  });
  var bikeKm = Math.round(durations.bike * 0.28); // ~28km/hr avg
  var runKm  = Math.round(durations.run * 0.1);   // ~10km/hr avg
  var biggest = counts.bike < counts.swim && counts.bike < counts.run ? 'bike' : counts.run < counts.swim ? 'run' : 'swim';
  return "📊 Training volume breakdown:\n\n" +
    "• 🏊 Swim: " + counts.swim + " sessions · " + durations.swim + " min total\n" +
    "• 🚴 Bike: " + counts.bike + " sessions · ~" + bikeKm + " km\n" +
    "• 🏃 Run: " + counts.run + " sessions · ~" + runKm + " km\n\n" +
    "⚠️ Biggest gap: " + biggest.toUpperCase() + "\n\n" +
    "🧑‍🏫 For Ironman, bike is most athletes' limiter. Target: 3 bike sessions/week by Phase 2.";
}

function answerWeeklySummary(dataset) {
  var weekAgo = new Date(); weekAgo.setDate(weekAgo.getDate() - 7);
  var weekStr = weekAgo.toISOString().split('T')[0];
  var week = dataset.filter(function(d) { return d.date >= weekStr; });
  var workouts = [];
  week.forEach(function(d) { (d.workouts || []).forEach(function(w) { workouts.push(w); }); });
  var avgRec = week.filter(function(d){return d.recovery;}).reduce(function(s,d){return s+d.recovery;},0) /
               (week.filter(function(d){return d.recovery;}).length || 1);
  var totalStrain = week.reduce(function(s,d){return s+(d.strain||0);},0);
  return "📅 This week's summary:\n\n" +
    "• Sessions: " + workouts.length + "\n" +
    "• Avg recovery: " + (avgRec ? avgRec.toFixed(0) + "%" : "—") + "\n" +
    "• Total strain: " + totalStrain.toFixed(1) + "\n" +
    "• Days with data: " + week.length + "\n\n" +
    "🧑‍🏫 Phase 1 target: 5 sessions/week, strain 10–13/session. Log your data daily for better coaching.";
}

function answerSport(dataset, sport) {
  var workouts = [];
  dataset.forEach(function(d) { (d.workouts || []).forEach(function(w) { workouts.push(Object.assign({}, w, {date:d.date})); }); });
  var filtered = workouts.filter(function(w) {
    var a = (w.activity || '').toLowerCase();
    if (sport === 'swim') return a.includes('swim');
    if (sport === 'bike') return a.includes('cycl') || a.includes('bike');
    if (sport === 'run')  return a.includes('run');
    return false;
  });
  if (!filtered.length) return "No " + sport + " sessions found yet.";
  var totalMin = filtered.reduce(function(s,w){return s+(w.duration||0);},0);
  var avgStrain = filtered.reduce(function(s,w){return s+(+w.strain||0);},0) / filtered.length;
  var icons = { swim:'🏊', bike:'🚴', run:'🏃' };
  var targets = {
    swim: "Target: 3×/week, build to 3,800m per session by Phase 3",
    bike: "Target: 3×/week, build to 160km long ride by Phase 3. This is your biggest gap.",
    run:  "Target: 3×/week, keep all easy runs in Z2 (under 145 bpm)"
  };
  return icons[sport] + " " + sport.charAt(0).toUpperCase()+sport.slice(1) + " breakdown:\n\n" +
    "• Sessions: " + filtered.length + "\n" +
    "• Total time: " + totalMin + " min (" + (totalMin/60).toFixed(1) + " hrs)\n" +
    "• Avg session: " + Math.round(totalMin/filtered.length) + " min\n" +
    "• Avg strain: " + avgStrain.toFixed(1) + "\n" +
    "• Last session: " + filtered.slice(-1)[0].date + "\n\n" +
    "🧑‍🏫 " + targets[sport];
}

function answerRecovery(dataset) {
  var withRec = dataset.filter(function(d){return d.recovery;});
  if (!withRec.length) return "No recovery data yet.";
  var avg = withRec.reduce(function(s,d){return s+d.recovery;},0)/withRec.length;
  var green = withRec.filter(function(d){return d.recovery>=67;}).length;
  var yellow = withRec.filter(function(d){return d.recovery>=34&&d.recovery<67;}).length;
  var red = withRec.filter(function(d){return d.recovery<34;}).length;
  var latest = withRec.slice(-1)[0];
  return "💚 Recovery overview (" + withRec.length + " days):\n\n" +
    "• Latest: " + latest.recovery + "% (" + latest.date + ")\n" +
    "• Average: " + avg.toFixed(0) + "%\n" +
    "• 🟢 Green days: " + green + " (" + Math.round(green/withRec.length*100) + "%)\n" +
    "• 🟡 Yellow days: " + yellow + "\n" +
    "• 🔴 Red days: " + red + "\n\n" +
    "🧑‍🏫 Goal: Push average above 65% through better sleep and managed training stress.";
}

function answerStrain(dataset) {
  var recent = dataset.filter(function(d){return d.strain;}).slice(-14);
  if (!recent.length) return "No strain data yet.";
  var avg = recent.reduce(function(s,d){return s+d.strain;},0)/recent.length;
  var max = Math.max.apply(null, recent.map(function(d){return d.strain;}));
  return "🔥 Strain (last 14 days):\n\n" +
    "• Avg daily strain: " + avg.toFixed(1) + "\n" +
    "• Peak strain: " + max.toFixed(1) + "\n\n" +
    "Phase 1 target range: 10–13/session\n\n" +
    "🧑‍🏫 Strain above 16 on back-to-back days without 80%+ recovery = overtraining risk. Monitor closely.";
}

function answerPhase() {
  var days = Math.ceil((new Date('2026-10-04') - new Date()) / 86400000);
  var phase = days > 111 ? 1 : days > 69 ? 2 : days > 27 ? 3 : 4;
  var phaseInfo = [
    null,
    { name:'Base', dates:'Jun 6 – Jul 3', goal:'Build aerobic engine. Z2 only. Establish bike routine.', strain:'10–13' },
    { name:'Build', dates:'Jul 4 – Aug 14', goal:'Extend bike to 120km, add bricks, introduce HIIT.', strain:'13–16' },
    { name:'Peak', dates:'Aug 15 – Sep 11', goal:'Race simulation, 160km bike, 30km run. Peak volume.', strain:'15–18' },
    { name:'Taper', dates:'Sep 12 – Oct 4', goal:'Reduce volume 40–60%. Preserve fitness. Trust training.', strain:'7–12' }
  ];
  var p = phaseInfo[phase];
  return "📅 Current training phase:\n\n" +
    "Phase " + phase + " — " + p.name + "\n" +
    "📆 " + p.dates + "\n\n" +
    "Goal: " + p.goal + "\n" +
    "Strain target: " + p.strain + "/session\n\n" +
    "🧑‍🏫 Tap the 📅 Plan tab for full week-by-week sessions.";
}

function answerNutrition(dataset) {
  var cals = dataset.filter(function(d){return d.calories;}).slice(-7);
  var avg = cals.length ? cals.reduce(function(s,d){return s+d.calories;},0)/cals.length : 0;
  return "🥤 Nutrition snapshot:\n\n" +
    (avg ? "• Avg daily calories: " + avg.toFixed(0) + " cal (last 7 days)\n\n" : "") +
    "Race day fuelling targets:\n" +
    "• Bike: 60–80g carbs/hr\n" +
    "• Run: 40–60g carbs/hr\n" +
    "• Hydration: 500–750ml/hr\n\n" +
    "🧑‍🏫 Start practicing race nutrition NOW on your long bike sessions. Your gut needs training too — GI issues are the #1 DNF cause in Ironman.";
}

function answerFallback(q, dataset) {
  var days = Math.ceil((new Date('2026-10-04') - new Date()) / 86400000);
  var latest = getLatestEntry(dataset);
  return "I'm not sure about that specific question. Here's what I can tell you:\n\n" +
    "• " + days + " days to race day\n" +
    (latest && latest.recovery ? "• Latest recovery: " + latest.recovery + "%\n" : "") +
    "\nTry asking:\n" +
    "• \"Am I ready to train today?\"\n" +
    "• \"How's my sleep?\"\n" +
    "• \"What's my biggest gap?\"\n" +
    "• \"How's my HRV trending?\"";
}
