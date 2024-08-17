import React from 'react';

const VersionSelector = ({ onSelectVersion }) => {
    const versions = ['KJV', 'NIV', 'ESV', 'NASB']; // Add more versions as needed

    return (
        <select onChange={(e) => onSelectVersion(e.target.value)}>
            <option value="">Select a version</option>
            {versions.map((version) => (
                <option key={version} value={version}>
                    {version}
                </option>
            ))}
        </select>
    );
};

export default VersionSelector;
