# Getting Started

## パッケージのインストール

Git から Clone 後に必要なパッケージのインストールを行います。

```bash
yarn install
```

> **Note**  
> npm でも動作しますが **yarn の利用**を推奨しています。

## サーバーの立ち上げ

```bash
yarn dev
```

[http://localhost:3000](http://localhost:3000) にブラウザでアクセスすれば OK です。

## Storybook の立ち上げ

まず始めに src フォルダ直下に component フォルダを作成しましょう（src/component）。作成後以下のコマンドを叩きます。

```bash
yarn sb
```

これで Storybook が [http://localhost:6006](http://localhost:6006) で立ち上がります。

## テスト

Jest でのテストは以下の通りです。

```bash
yarn test
```

## Tips

### バージョン情報

主なパッケージのバージョンは以下の通りです。  
2022/05/25 時点の最新版で設定されています。

- TypeScript：4.6.4
- React：18.1.0
- Next.js：12.1.6
- Tailwind CSS：3.0.24
- React Hook Form：7.30.0
- Zod：3.15.1
- ESLint：8.15.0
- Prettier：2.6.2
- Storybook：6.4.22
- Plop：3.1.0
- Jest：28.1.0
- React Testing Library：13.2.0

> **Note**  
> 最新版のパッケージへアップグレードが必要な場合は `yarn upgrade --latest` を実行すると良いでしょう。

### コンポーネントの雛形

[PLOP](https://plopjs.com/) を使って Parts, Templates, Views のコンポーネント開発に必要な雛形が自動的に生成できるように設定してあります。以下のコマンドで対話的にコンポーネントの雛形が作成できるため試してみましょう。

```bash
yarn generate
```

PLOP の設定は `generator` ディレクトリを確認してください。

各種コンポーネントを切り分ける基準は以下の通りです。

|           | API 通信    | グローバル State | Style | 依存関係         |
| --------- | ----------- | ---------------- | ----- | ---------------- |
| Parts     | ×           | ×                | ○     | parts            |
| Templates | △           | ○                | ○     | parts, templates |
| Views     | ○（client） | ○                | △     | parts, templates |
| Pages     | ○（ssr）    | ×                | ×     | views            |

> **Note**  
> Templates と Views では雛形として以下は作成しませんが、必要に応じて作成してください。
>
> - Container Component のテスト：`index.test.tsx`
> - Custom Hooks：`hooks.ts` or `hooks.tsx`
> - Custom Hooks のテスト：`hooks.test.ts` or `hooks.test.tsx`
>
> Custom Hooks は `src/hook` ディレクトリで扱うことが多いと予想して、各コンポーネント内では雛形を自動で作成しないようにしています。

### Form

Form 関連は React Hook Form をメインで利用しています。React Hook Form を利用することでコーディング量を減らすことができるだけでなく、レンダリングを効率的に行うことができます。React Hook Form 自体でバリデーションを行えますが、Zod もしくは Yup のようなバリデーション専用のライブラリと連携させることもでき Zod を利用します。

### デプロイ

現状では Vercel と接続すると良いでしょう。アップロード先の GitHub リポジトリを選択すれば問題なくデプロイできるはずです。

### CI/CD

GitHub Actions での CI/CD が標準で設定されています。`main` ブランチに Pull Request or Push した場合に Jest でのテストが動作します。詳細な設定は`.github/workflows.test.yml` を確認してください。

### ESLint/Prettier

[Next.js が推奨する方法](https://nextjs.org/docs/basic-features/eslint)を基本として設定しています。VSCode で保存時に Prettier が適用されるようにもなっているので便利です。ESLint の設定は `.eslintrc` に、Prettier の設定は `package.json` に記載されています。

## プロジェクト

### 命名規則

`pages` など Next.js で決められているものを除き、英語は**単数形**を使います。複数形で書くことも海外では多いのですが、日本人だけのチームの時は単数形と複数形で迷う場合が多く、この思考のストレスを少しでも減らすために単数形にしています。今のところは大きな問題に遭遇したことがありません。

### コンポーネントの単位

Atomic デザインを基本としてコンポーネントを設計していきます。

- Atom (Presentational Component)
  - コンポーネントの実装は行わず Tailwind CSS の `@apply` などで決められる範囲内が目安
- Molecule (Presentational Component)
  - 複数の Atom をまとめて使いやすくする程度
- Project (Container & Presentational Component)
  - プロダクト固有のコンポーネント（ Organism or Template )。

Presentational Component としての実装の最大は Project として、小：中：大＝ Atom：Molecule：Project と考えると楽かと思います。

### ディレクトリ構造

```bash
kikagaku-next-starter-kit
# ソースコード
├── src
# ファイル置き場
├── public
# Next.js
├── next.config.js
├── next-env.d.ts
# Tailwind CSS
├── tailwind.config.js
├── postcss.config.js
# Jest
├── jest.config.js
├── jest.setup.js
# PLOP
├── generator
# プロジェクトの設定
├── README.md
├── node_modules
├── package.json
├── yarn.lock
└── tsconfig.json
```

ソースコード `src` のディレクトリ構造は以下の通りです。

```bash
./src
├── component
│   ├── README.md
│   └── [ProjectName]
│       │── part
│       │   └── [ComponentName]
│       │       ├── index.tsx                   # Presentational Component
│       │       ├── [ComponentName].test.tsx    # Test for Pres. Component
│       │       ├── [ComponentName].props.ts    # Props for Test & SB
│       │       └── [ComponentName].stories.tsx # Storybook (SB)
│       ├── template
│       │   └── [ComponentName]
│       │       ├── index.tsx                   # Container Component
│       │       ├── [ComponentName].tsx         # Presentational Component
│       │       ├── [ComponentName].test.tsx    # Test for Pres. Component
│       │       ├── [ComponentName].props.ts    # Props for Test & SB
│       │       └── [ComponentName].stories.tsx # Storybook (SB)
│       └── view
│           └── [ComponentName]
│               ├── index.tsx                   # Container Component
│               ├── [ComponentName].tsx         # Presentational Component
│               ├── [ComponentName].test.tsx    # Test for Pres. Component
│               ├── [ComponentName].props.ts    # Props for Test & SB
│               └── [ComponentName].stories.tsx # Storybook (SB)
├── pages
│   ├── _app.tsx
│   └── index.tsx
└── style
    └── globals.css  # Tailwind CSS の設定（Atom で使う）
```
