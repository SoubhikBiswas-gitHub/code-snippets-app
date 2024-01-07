import React from 'react';
import CopyButton from './CopyButton';
import DownloadButton from './DownloadButton';

interface ToolbarProps {
    code: string;
    snippetRef: React.RefObject<HTMLDivElement>;
}

const Toolbar: React.FC<ToolbarProps> = ({ code, snippetRef }) => {
    return (
        <div className="flex justify-between mb-4">
            <CopyButton code={code} />
            <DownloadButton snippetRef={snippetRef} />
        </div>
    );
};

export default Toolbar;
