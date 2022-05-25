## component

Component のファイルを格納する場所

各種コンポーネントを切り分ける基準は以下の通りです。

|           | API 通信    | グローバル State | Style | 依存関係         |
| --------- | ----------- | ---------------- | ----- | ---------------- |
| Parts     | ×           | ×                | ○     | parts            |
| Templates | △           | ○                | ○     | parts, templates |
| Views     | ○（client） | ○                | △     | parts, templates |
| Pages     | ○（ssr）    | ×                | ×     | views            |

ディレクトリは `${Project Name}/${part/template/view}/${Component Name}` となります。  
ただし、Pages は `pages` ディレクトリに格納します。

## Atomic Design を採用しない背景

現状では Atomic Design を参考にコンポーネントの切り分けていました。
Atomic Design は Figma などでデザインを作るときには非常に親和性の高いものではありますが、実装時にその境界線上が曖昧になり、足を引っ張ることがあります。

### 問題点

具体的には以下の問題点を抱えています。

- Atoms と Molecules の実装時の違いは何か？
- Presentation/Container を分けて同一コンポーネントとして実装している場合、Organisms と Templates の実装時の違いは何か？

これらの問題点をより実装の点で考えると以下の切り分けになります。

- どの階層コンポーネントに依存してもよいのか？
- スタイリングはどこで行うべきなのか？
- どこで API 通信を行うのか？
- グローバルな状態を持っても良いのか？

### 解決策

デザイン上は Atomic Design を採用し、実装時には以下の４つに分類を分ける方向とします。
デザインと実装のコンポーネントの切り分けでも問題が発生した場合、実装に合わせていく方針でも良いかと思います。

|           | API 通信    | グローバル State | Style | 依存関係         |
| --------- | ----------- | ---------------- | ----- | ---------------- |
| Parts     | ×           | ×                | ○     | parts            |
| Templates | △           | ○                | ○     | parts, templates |
| Views     | ○（client） | ○                | △     | parts, templates |
| Pages     | ○（ssr）    | ×                | ×     | views            |

Parts に従来の Atoms と Molecules を集約します。
Templates に従来の Organism に近い役割を集約しますが、API 通信は持たせてはいけない制約付きです。スタイリングは Templates の時点でほとんど終わっていることが望ましいでしょう。
Views では Client Side (React Hooks) での API 通信を持たせます。
Pages では Sever Side での API 通信を持たせます。

つまり、Parts と Templates で大体のコンポーネントの見た目を作って、Views では CSR, Pages では SSR のビジネスロジックの付与のみと考えるのがわかりやすいでしょう。

### 参考

[【React/Vue.js】コンポーネント設計の（個人的）ベストプラクティス | Offers Tech Blog](https://zenn.dev/offers/articles/20220523-component-design-best-practice)
