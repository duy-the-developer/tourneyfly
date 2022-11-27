import React from 'react'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'

import {
  ChatBubbleLeftEllipsisIcon,
  CodeBracketIcon,
  EllipsisVerticalIcon,
  EyeIcon,
  FlagIcon,
  HandThumbUpIcon,
  ShareIcon,
  StarIcon,
} from '@heroicons/react/20/solid'

import classNames from '../../../../utils/classNames'

type TQuestion = {
  id: string
  likes: string
  replies: string
  views: string
  author: {
    name: string
    imageUrl: string
    href: string
  }
  date: string
  datetime: string
  href: string
  title: string
  body: string
}

const Match = ({ question }: { question: TQuestion }) => {
  return (
    <li
      key={question.id}
      className='rounded-lg bg-dpurple px-4 py-6 shadow sm:p-6'
    >
      Match
    </li>
  )
}

export default Match
