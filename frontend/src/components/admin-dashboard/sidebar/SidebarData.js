import React from 'react'
import { MdAssessment} from 'react-icons/md'
import {GoCommentDiscussion, GoReport } from 'react-icons/go'
import {RiAdminLine } from 'react-icons/ri'

export const SidebarData = [
    {
        title: "Reports",
        icon: <GoReport />,
        Link: "/reports"
    },
    {
        title: "Chat",
        icon: <GoCommentDiscussion />,
        Link: "/chat"
    },
    {
        title: "Crime analytics",
        icon: <MdAssessment />,
        Link: "/analytics"
    },
    {
        title: "Admin settings",
        icon: <RiAdminLine />,
        Link: "/admin"
    },

]
