import { toPng } from 'html-to-image';
import React from 'react';
interface DownloadButtonProps {
    snippetRef: React.RefObject<HTMLDivElement>;
}
const DownloadButton: React.FC<DownloadButtonProps> = ({ snippetRef }) => {
    const handleDownload = async () => {
        if (!snippetRef.current) return;

        try {
            const dataUrl = await toPng(snippetRef.current);
            const link = document.createElement('a');
            link.download = 'code-snippet.png';
            link.href = dataUrl;
            link.click();
        } catch (error) {
            console.error('Oops, something went wrong!', error);
        }
    };

    return (
        <button
            onClick={handleDownload}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
            Download as Image
        </button>
    );
};

export default DownloadButton;
