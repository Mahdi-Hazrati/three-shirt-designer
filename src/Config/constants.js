import { IoMdColorPalette , IoMdShirt} from "react-icons/io";
import { AiFillFileAdd, AiFillRobot } from "react-icons/ai";
import {GiMailShirt} from "react-icons/gi"

export const EditorTabs = [
    {
        name: "colorpicker",
        icon: <IoMdColorPalette />,
    },
    {
        name: "filepicker",
        icon: <AiFillFileAdd />,
    },
    {
        name: "aipicker",
        icon: <AiFillRobot />,
    },
];

export const FilterTabs = [
    {
        name: "logoShirt",
        icon: <IoMdShirt/>,
    },
    {
        name: "stylishShirt",
        icon: <GiMailShirt/>,
    },
];

export const DecalTypes = {
    logo: {
        stateProperty: "logoDecal",
        filterTab: "logoShirt",
    },
    full: {
        stateProperty: "fullDecal",
        filterTab: "stylishShirt",
    },
};
