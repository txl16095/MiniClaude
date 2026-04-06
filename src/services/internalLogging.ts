/**
 * Internal logging - 占位文件
 * 原始功能已删除，保留此文件以保持兼容性
 */

import type { ToolPermissionContext } from '../Tool.js'

export async function getContainerId(): Promise<string | null> {
  return null
}

export async function logPermissionContextForAnts(
  _toolPermissionContext: ToolPermissionContext | null,
  _moment: 'summary' | 'initialization',
): Promise<void> {
  // 空实现
}
