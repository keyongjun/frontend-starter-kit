export interface ApiResponse<T = unknown> {
  success: boolean
  data?: T
  error?: string
}

export interface PaginationQuery {
  page?: number
  limit?: number
}
