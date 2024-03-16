const PREFIX = 'api';

const fileService = {
  getFileUrl(uuid: string | null | undefined) {
    if (!uuid) {
      return '';
    }
    return `${process.env.NEXT_PUBLIC_API_URL}/${PREFIX}/files/${uuid}`
  }
}

export default fileService;


