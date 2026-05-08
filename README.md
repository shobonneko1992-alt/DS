# デイサービス送迎表アプリ

## ローカルで動かす

```bash
npm install
npm run dev
```

## GitHub → Vercel デプロイ手順

### 1. GitHubにリポジトリを作る
1. https://github.com/new でリポジトリを作成
2. 以下を実行：

```bash
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/【ユーザー名】/【リポジトリ名】.git
git push -u origin main
```

### 2. Vercelでデプロイ
1. https://vercel.com にアクセスしてログイン
2. 「Add New Project」をクリック
3. GitHubのリポジトリを選択
4. フレームワークは Vite を選択
5. 「Deploy」ボタンを押す
