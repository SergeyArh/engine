interface Train {
  name: string,
  description: string,
  characteristics: Record<string, number>[],
}

interface Response {
  trains: Train[]
}

export function fetchTrains(): Promise<Response> {
  const url = 'https://gist.githubusercontent.com/allbel/ae2f8ead09baf7bb66d281e3a6050261/raw/4c898f101913cd7918ab1dbfce008fa12c6d4838/mock.json';
  return fetch(url)
  .then(response => response.json())
  .then(trains => {
    return {
      trains
    }
  })
}