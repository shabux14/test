import type { NextApiRequest, NextApiResponse } from 'next'

type Server = {
  type: string
  status: string
  cpu: string
  ram: string
  disk: string
}

type CityStatus = {
  city: string
  servers: Server[]
  timestamp: string
}

const statusStore: Record<string, CityStatus> = {}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const data = req.body as CityStatus
    if (!data.city || !data.servers || !Array.isArray(data.servers)) {
      return res.status(400).json({ error: 'Invalid payload format' })
    }

    statusStore[data.city] = data
    return res.status(200).json({ message: 'Status saved successfully' })
  }

  if (req.method === 'GET') {
    return res.status(200).json(statusStore)
  }

  return res.status(405).json({ error: 'Method not allowed' })
}
