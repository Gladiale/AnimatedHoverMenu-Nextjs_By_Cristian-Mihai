source
> https://www.youtube.com/watch?v=t5J5_06RczY

```powershell
bun pm cache rm

$env:HTTP_PROXY="http://127.0.0.1:7890"
$env:HTTPS_PROXY="http://127.0.0.1:7890"
```

```bash
bunx create-next-app@latest .
bun run dev

bun add framer-motion react-icons

# nextjsのキャッシュを削除
rm -rf .next/
```