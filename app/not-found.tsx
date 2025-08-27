import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '404 | HIROKI ISHIDA | Portfolio Site',
  description: '404エラー お探しのページは見つかりません',
}

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">404 - ページが見つかりません</h1>
      <p className="mb-8">お探しのページは存在しません。</p>
      <Link className="text-blue-500 underline" href="/">トップへ戻る</Link>
    </div>
  );
}