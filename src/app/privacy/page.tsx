import { readFileSync } from "fs";
import { join } from "path";
import { MarkdownRenderer } from "@/components/ui/markdown-renderer";

export default async function PrivacyPolicyPage() {
  // マークダウンファイルを読み込む
  const filePath = join(process.cwd(), "src", "content", "privacy-policy.md");
  const markdownContent = readFileSync(filePath, "utf8");

  return (
    <div className='min-h-screen bg-white dark:bg-[#101010]'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16'>
        <div className='bg-white dark:bg-[#101010] rounded-lg mt-12'>
          <MarkdownRenderer
            content={markdownContent}
            className='text-gray-900 dark:text-gray-100'
          />
        </div>
      </div>
    </div>
  );
}
