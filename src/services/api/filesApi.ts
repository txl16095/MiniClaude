// Stub file — Files API removed (Anthropic cloud-only feature)

export type File = {
  fileId: string
  relativePath: string
}

export type FilesApiConfig = {
  oauthToken: string
  baseUrl?: string
  sessionId: string
}

export type DownloadResult = {
  fileId: string
  path: string
  success: boolean
  error?: string
  bytesWritten?: number
}

export type UploadResult =
  | {
      path: string
      fileId: string
      size: number
      success: true
    }
  | {
      path: string
      error: string
      success: false
    }

export type FileMetadata = {
  filename: string
  fileId: string
  size: number
}

export async function downloadFile(): Promise<null> {
  return null
}

export function buildDownloadPath(): string {
  return ''
}

export async function downloadAndSaveFile(): Promise<null> {
  return null
}

export async function downloadSessionFiles(): Promise<DownloadResult[]> {
  return []
}

export async function uploadFile(): Promise<UploadResult> {
  return { path: '', error: 'Not available', success: false }
}

export async function uploadSessionFiles(): Promise<UploadResult[]> {
  return []
}

export async function listFilesCreatedAfter(): Promise<FileMetadata[]> {
  return []
}

export function parseFileSpecs(fileSpecs: string[]): File[] {
  const files: File[] = []
  const expandedSpecs = fileSpecs.flatMap(s => s.split(' ').filter(Boolean))
  for (const spec of expandedSpecs) {
    const colonIndex = spec.indexOf(':')
    if (colonIndex === -1) continue
    const fileId = spec.substring(0, colonIndex)
    const relativePath = spec.substring(colonIndex + 1)
    if (!fileId || !relativePath) continue
    files.push({ fileId, relativePath })
  }
  return files
}
