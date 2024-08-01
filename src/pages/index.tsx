import { FC } from "react";

import Map from "../assets/map.svg";

const Syllabus: FC = () => {

  const syllabuses = [
    {
      "title": "TONE",
      "link": "/tone",
      "description": "ā á ǎ à",
    },
    {
      "title": "GREETING!",
      "link": "/greeting",
      "description": "你好。 早上好。 再见 !",
    },
    {
      "title": "NUMBER",
      "link": "/number",
      "description": "一 二 三 四 五 六 七 八 九 十 百 千 万 亿",
    },
    {
      "title": "PRONOUN",
      "link": "/pronoun",
      "description": "我 你 他 她 它 们",
    },
    {
      "title": "SENTENCE STRUCTURE",
      "link": "/sentence-structure",
      "description": "你好吗？ 我很好。 我学中文，你呢？ 我教你中文。",
    },
    {
      "title": "PINYIN",
      "link": "/pinyin",
      "description": "a o e i u ü b p m f d t n l g k h j q x zh ch sh r z c s y w",
    },
    {
      "title": "VOCABULARY",
      "link": "/vocabulary",
      "description": "Books, music and cats have been my friends from way back.",
    },
    {
      "title": "CONTEXT",
      "link": "/context",
      "description": "你可真行！你怎么来了？"
    }
  ]

  return <div className="flex flex-col items-start gap-4">
    {
      syllabuses.map((syllabus, index) => {
        return <div key={ index } className="flex flex-col items-start">
          <a
            className="text-white text-4xl font-bold"
            href={ syllabus.link }
          >{ index }. { syllabus.title }</a>
          <p className="text-zinc-400 font-normal font-sans text-base ">{ syllabus.description }</p>
        </div>
      })
    }
  </div>;
}

export default function Home() {
  return <div className="home w-full">
    <div className="flex flex-col items-start ml-32 w-fit gap-20">
      <h1 className="text-8xl text-white">MANDARIN 101</h1>
      <Syllabus />
    </div>
    <img className="absolute -right-4 -top-5" src={ Map } />
  </div>

}
