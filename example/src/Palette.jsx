import React, { useState } from "react";
import { Embed } from "hyvor-talk-react";

export default function Palette() {

    const [isDark, setIsDark] = useState(false);

    const palette = isDark ? {
        accent: "#ffffff",
        accentText: "#000000",
        footerHeader: "#1b1818",
        footerHeaderText: "#cac7c7",
        box: "#232121",
        boxText: "#ffffff",
        boxLightText: "#aaaaaa",
        backgroundText: "#ffffff"
    } : {
        accent: "#659DBD",
        accentText: "#FFFFFF",
        footerHeader: "#FAFAFA",
        footerHeaderText: "#484848",
        box: "#FFFFFF",
        boxText: "#111111",
        boxLightText: "#AAAAAA",
        backgroundText: "#111111"
    }

    function handleDarkChange() {
        setIsDark(!isDark);
    }

    return <div>
        <Embed
            websiteId={14}
            palette={palette}
        />
        <button onClick={handleDarkChange}>Toggle Color</button>
    </div>

}