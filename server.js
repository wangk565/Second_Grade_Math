const express = require('express');
const session = require('express-session');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const DB_PATH = path.join(__dirname, 'data.sqlite');
const db = new sqlite3.Database(DB_PATH);

const STUDENT_ROSTER = {
  c1: [
    { studentId: 1, region: '东', name: '白瑜成', gender: '男' },
    { studentId: 2, region: '东', name: '陈伊贝', gender: '女' },
    { studentId: 3, region: '东', name: '陈子涵', gender: '女' },
    { studentId: 4, region: '东', name: '程麒', gender: '男' },
    { studentId: 5, region: '东', name: '崔恩泽', gender: '男' },
    { studentId: 6, region: '东', name: '丁宇泽', gender: '男' },
    { studentId: 7, region: '东', name: '方可昕', gender: '女' },
    { studentId: 8, region: '东', name: '龚沁瑶', gender: '女' },
    { studentId: 9, region: '东', name: '何嘉衡', gender: '男' },
    { studentId: 10, region: '东', name: '何瑜昊', gender: '男' },
    { studentId: 11, region: '东', name: '黄瑾妍', gender: '女' },
    { studentId: 12, region: '东', name: '蒋梓航', gender: '男' },
    { studentId: 13, region: '东', name: '蒋梓铃', gender: '女' },
    { studentId: 14, region: '东', name: '蒋梓鑫', gender: '女' },
    { studentId: 15, region: '东', name: '柯锦言', gender: '女' },
    { studentId: 16, region: '东', name: '兰佳晨', gender: '男' },
    { studentId: 17, region: '东', name: '李俊儒', gender: '男' },
    { studentId: 18, region: '东', name: '李田静宇', gender: '男' },
    { studentId: 19, region: '东', name: '林香媛', gender: '女' },
    { studentId: 20, region: '东', name: '刘羿鑫', gender: '男' },
    { studentId: 21, region: '东', name: '刘智恒', gender: '男' },
    { studentId: 22, region: '东', name: '罗佳怡', gender: '女' },
    { studentId: 23, region: '东', name: '聂梦芯', gender: '女' },
    { studentId: 24, region: '东', name: '邱恩善', gender: '女' },
    { studentId: 25, region: '东', name: '邱思程', gender: '男' },
    { studentId: 26, region: '东', name: '全佳瑞', gender: '男' },
    { studentId: 27, region: '东', name: '唐锐涵', gender: '女' },
    { studentId: 28, region: '东', name: '王昊然', gender: '男' },
    { studentId: 29, region: '东', name: '王家铭', gender: '男' },
    { studentId: 30, region: '东', name: '王景钰', gender: '女' },
    { studentId: 31, region: '东', name: '吴晨曦', gender: '女' },
    { studentId: 32, region: '东', name: '武辰希', gender: '男' },
    { studentId: 33, region: '东', name: '向言汐', gender: '女' },
    { studentId: 34, region: '东', name: '肖煜诺', gender: '男' },
    { studentId: 35, region: '东', name: '杨佳兴', gender: '女' },
    { studentId: 36, region: '东', name: '杨嘉瑞', gender: '男' },
    { studentId: 37, region: '东', name: '杨明泽', gender: '男' },
    { studentId: 38, region: '东', name: '杨洢诺', gender: '女' },
    { studentId: 39, region: '东', name: '袁余鑫澄', gender: '男' },
    { studentId: 40, region: '东', name: '张博恩', gender: '男' },
    { studentId: 41, region: '东', name: '张未来', gender: '女' },
    { studentId: 42, region: '东', name: '赵玟锦柯', gender: '女' },
    { studentId: 43, region: '东', name: '周铭锋', gender: '男' },
    { studentId: 44, region: '东', name: '朱昊桐', gender: '男' },
  ],
  c2: [
    { studentId: 1, name: '陈晋琰', gender: '男' },
    { studentId: 2, name: '陈胤安', gender: '男' },
    { studentId: 3, name: '段宸希', gender: '男' },
    { studentId: 4, name: '高鸿宇', gender: '男' },
    { studentId: 5, name: '胡宇桐', gender: '男' },
    { studentId: 6, name: '黄瑾翎', gender: '男' },
    { studentId: 7, name: '冷研', gender: '男' },
    { studentId: 8, name: '李昊阳', gender: '男' },
    { studentId: 9, name: '梁睿', gender: '男' },
    { studentId: 10, name: '刘浩睿', gender: '男' },
    { studentId: 11, name: '罗宇帆', gender: '男' },
    { studentId: 12, name: '彭飞扬', gender: '男' },
    { studentId: 13, name: '杨浩然', gender: '男' },
    { studentId: 14, name: '唐梓洋', gender: '男' },
    { studentId: 15, name: '王逸峰', gender: '男' },
    { studentId: 16, name: '向可立', gender: '男' },
    { studentId: 17, name: '闫浩南', gender: '男' },
    { studentId: 18, name: '杨亦睿', gender: '男' },
    { studentId: 19, name: '邹文良', gender: '男' },
    { studentId: 20, name: '钟佳良', gender: '男' },
    { studentId: 21, name: '陈芊诺', gender: '男' },
    { studentId: 22, name: '陈一初', gender: '男' },
    { studentId: 23, name: '冯万欣', gender: '男' },
    { studentId: 24, name: '甘柠菲', gender: '男' },
    { studentId: 25, name: '孟心耘', gender: '男' },
    { studentId: 26, name: '胡妤冰', gender: '男' },
    { studentId: 27, name: '康沐夕', gender: '男' },
    { studentId: 28, name: '廖诗琴', gender: '男' },
    { studentId: 29, name: '刘艾兮', gender: '男' },
    { studentId: 30, name: '刘溪玥', gender: '男' },
    { studentId: 31, name: '潘禹竹', gender: '男' },
    { studentId: 32, name: '蒲米琪', gender: '男' },
    { studentId: 33, name: '田梦茜', gender: '男' },
    { studentId: 34, name: '王嘉宇', gender: '男' },
    { studentId: 35, name: '吴瑞', gender: '男' },
    { studentId: 36, name: '向雅楠', gender: '男' },
    { studentId: 37, name: '杨昔未', gender: '男' },
    { studentId: 38, name: '杨伊一', gender: '男' },
    { studentId: 39, name: '张心怡', gender: '男' },
    { studentId: 40, name: '章诗妍彤', gender: '男' },
    { studentId: 41, name: '卿小涵', gender: '男' },
    { studentId: 42, name: '张敬亭', gender: '男' },
    { studentId: 43, name: '李湘怡', gender: '男' },
    { studentId: 44, name: '钟语晨', gender: '男' },
  ],
};

function createSeedStudentList() {
  return Object.entries(STUDENT_ROSTER).flatMap(([classId, rows]) => rows.map((student, index) => ({
    id: `seed_${classId}_${String(student.studentId).padStart(3, '0')}`,
    name: student.name,
    studentId: String(student.studentId),
    gender: student.gender,
    region: student.region || '',
    note: '',
    classId,
    createdAt: Date.now() - index * 86400000,
  })));
}

function createDefaultState() {
  return {
    students: createSeedStudentList(),
    homework: [],
    exams: [],
    points: [],
  };
}

function runSql(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.run(sql, params, function(err) {
      if (err) return reject(err);
      resolve(this);
    });
  });
}

function getSql(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.get(sql, params, (err, row) => {
      if (err) return reject(err);
      resolve(row);
    });
  });
}

function initializeDatabase() {
  return new Promise((resolve, reject) => {
    db.serialize(() => {
      db.run('CREATE TABLE IF NOT EXISTS app_data (key TEXT PRIMARY KEY, value TEXT)', async (err) => {
        if (err) return reject(err);
        try {
          const row = await getSql('SELECT value FROM app_data WHERE key = ?', ['app_state']);
          if (!row) {
            await runSql('INSERT INTO app_data (key, value) VALUES (?, ?)', ['app_state', JSON.stringify(createDefaultState())]);
          }
          db.run('CREATE TABLE IF NOT EXISTS users (username TEXT PRIMARY KEY, password TEXT)', async (userErr) => {
            if (userErr) return reject(userErr);
            const existing = await getSql('SELECT username FROM users WHERE username = ?', ['jkyfx']);
            if (!existing) {
              await runSql('INSERT INTO users (username, password) VALUES (?, ?)', ['jkyfx', 'wangkun']);
            }
            resolve();
          });
        } catch (e) {
          reject(e);
        }
      });
    });
  });
}

async function readAppState() {
  const row = await getSql('SELECT value FROM app_data WHERE key = ?', ['app_state']);
  if (!row) return createDefaultState();
  try {
    return JSON.parse(row.value) || createDefaultState();
  } catch (e) {
    return createDefaultState();
  }
}

async function writeAppState(nextState) {
  const safeState = nextState || createDefaultState();
  await runSql('INSERT INTO app_data (key, value) VALUES (?, ?) ON CONFLICT(key) DO UPDATE SET value = excluded.value', ['app_state', JSON.stringify(safeState)]);
}

app.use(express.json({ limit: '2mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: process.env.SESSION_SECRET || 'second-grade-math-demo-secret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    sameSite: 'lax',
    secure: false,
    maxAge: 1000 * 60 * 60 * 24 * 7,
  },
}));

function requireAuth(req, res, next) {
  if (req.session && req.session.user) return next();
  return res.status(401).json({ error: '请先登录' });
}

app.get('/api/health', (req, res) => {
  res.json({ ok: true, time: new Date().toISOString() });
});

app.get('/api/session', (req, res) => {
  res.json({ loggedIn: !!(req.session && req.session.user), user: req.session && req.session.user ? req.session.user : null });
});

app.post('/api/login', async (req, res) => {
  const { username, password } = req.body || {};
  const row = await getSql('SELECT password FROM users WHERE username = ?', [username]);
  if (!row || row.password !== password || username !== 'jkyfx') {
    return res.status(401).json({ error: '用户名或密码错误' });
  }
  req.session.user = username;
  return res.json({ ok: true, user: username });
});

app.post('/api/logout', (req, res) => {
  req.session.destroy(() => {
    res.json({ ok: true });
  });
});

app.get('/api/data', requireAuth, async (req, res) => {
  const state = await readAppState();
  res.json(state);
});

app.post('/api/data', requireAuth, async (req, res) => {
  const payload = req.body || {};
  const state = {
    students: payload.students || [],
    homework: payload.homework || [],
    exams: payload.exams || [],
    points: payload.points || [],
  };
  await writeAppState(state);
  res.json({ ok: true });
});

app.use(express.static(path.join(__dirname)));
app.use((req, res, next) => {
  if (req.path.startsWith('/api/')) return next();
  res.sendFile(path.join(__dirname, 'index.html'));
});

initializeDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Online classroom app running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Database initialization failed:', err);
    process.exit(1);
  });
