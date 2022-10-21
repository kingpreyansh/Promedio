import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

// CONTAINS MOCK DATA FOR TESTING!!

export const SidebarDataNew = [
    {
        title: "University of Toronto",
        path: "/home",
        icon: <FaIcons.FaUniversity />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        // addSemester: {
        //     title: "Add Semester",
        //     // path: "",
        //     icon: <AiIcons.AiFillFolderAdd />,
        // }
        subNav: [
            {
                title: "Add Semester",
                path: "/home/add",
                icon: <AiIcons.AiFillFolderAdd />,
            }
        ]
    },
    {
        title: "2020: Fall",
        path: "/home/f2020",
        icon: <FaIcons.FaFolder />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: "CSCA08",
                path: "/home/f2020/csca08",
                icon: <IoIcons.IoIosDocument />,
            },
            {
                title: "CSCA67",
                path: "/home/f2020/csca67",
                icon: <IoIcons.IoIosDocument />,
            },
            {
                title: "MATA31",
                path: "/home/f2020/mata31",
                icon: <IoIcons.IoIosDocument />,
            },
            {
                title: "Add Course",
                path: "/home/f2020/add",
                icon: <AiIcons.AiFillFileAdd />
            }
        ],
        // addCourse: {
        //     title: "Add Course",
        //     path: "/home/f2020/add",
        //     icon: <AiIcons.AiFillFileAdd />
        // }
    },
    {
        title: "2021: Winter",
        path: "/home/w2021",
        icon: <FaIcons.FaFolder />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: "CSCA48",
                path: "/home/w2021/csca48",
                icon: <IoIcons.IoIosDocument />,
            },
            {
                title: "MATA22",
                path: "/home/w2021/mata22",
                icon: <IoIcons.IoIosDocument />,
            },
            {
                title: "MATA37",
                path: "/home/w2021/mata37",
                icon: <IoIcons.IoIosDocument />,
            },
            {
                title: "Add Course",
                path: "/home/f2020/add",
                icon: <AiIcons.AiFillFileAdd />
            },
        ],
        // addCourse: {
        //     title: "Add Course",
        //     path: "/home/w2021/add",
        //     icon: <AiIcons.AiFillFileAdd />
        // }
    },
    {
        title: "2021: Summer",
        path: "/home/s2021",
        icon: <FaIcons.FaFolder />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: "CSCB07",
                path: "/home/s2021/cscb07",
                icon: <IoIcons.IoIosDocument />,
            },
            {
                title: "CSCB09",
                path: "/home/s2021/cscb09",
                icon: <IoIcons.IoIosDocument />,
            },
            {
                title: "CSCB58",
                path: "/home/s2021/cscb58",
                icon: <IoIcons.IoIosDocument />,
            },
            {
                title: "Add Course",
                path: "/home/f2020/add",
                icon: <AiIcons.AiFillFileAdd />
            }
        ],
        // addCourse: {
        //     title: "Add Course",
        //     path: "/home/s2021/add",
        //     icon: <AiIcons.AiFillFileAdd />
        // }
    },
];