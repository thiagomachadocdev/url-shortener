import { useState } from 'react'
import axios from '../configs/api'

export default function Home() {
  const [originalUrl, setOriginalUrl] = useState('')
  const [slug, setSlug] = useState('')

  const url = process.env.NEXT_PUBLIC_URL

  async function shortenURL() {
    const response = await axios.post('/shorten-url', {
      originalUrl,
    })

    setSlug(response.data.slug)
  }

  return (
    <div className="h-screen w-full flex items-center justify-center p-3">
      <div className="flex flex-col gap-6 lg:gap-12 items-center">
        <h1 className="text-3xl lg:text-5xl font-bold text-center">
          Minimize os links, <br />
          maximize o alcance!
        </h1>

        <div className="w-full flex flex-col gap-3">
          <label htmlFor="url">URL</label>
          <input
            id="url"
            type="text"
            className="p-4 bg-gray-900 border border-gray-500 rounded-lg w-full"
            onChange={e => setOriginalUrl(e.target.value)}
          />
        </div>

        <button
          className="bg-gray-500 rounded-lg p-4 w-full"
          onClick={shortenURL}
        >
          Encurtar
        </button>

        {slug && (
          <div className="w-full flex flex-col gap-3">
            <label htmlFor="url">Resultado</label>
            <div className="p-4 bg-white border border-gray-500 rounded-lg w-full">
              {slug && `${url}/${slug}`}
            </div>
          </div>
        )}

        <span>
          Desenvolvido por{' '}
          <a
            href="https://linkedin.com/in/thiagomachadocdev/"
            target="_blank"
            className="text-red-400"
          >
            Thiago Machado
          </a>
        </span>
      </div>
    </div>
  )
}

