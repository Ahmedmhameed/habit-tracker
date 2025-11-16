// ===================================
// Habit Tracker Data Models (TypeScript Interfaces)
// ===================================

// =============================
// 🧩 Core Data Models
// =============================

export interface User {
    id: string
    name: string
    email: string
    avatarUrl?: string
    preferences?: UserPreferences
    createdAt: Date
    updatedAt: Date
}

export interface UserPreferences {
    language?: string
    timezone?: string
    notificationsEnabled?: boolean
}

export interface Category {
    id: string
    name: string
    description?: string
    color?: string
    icon?: string
}

export enum GoalType {
    Boolean = 'boolean',
    Quantitative = 'quantitative',
}

export type FrequencyType = 'daily' | 'weekly' | 'monthly' | 'custom'

export interface Frequency {
    type: FrequencyType
    daysOfWeek?: number[] // 0=الأحد
    timesPerWeek?: number
    timesPerMonth?: number
    intervalDays?: number // مثال: كل يومين
}

// =============================
// ✅ Habit Management
// =============================

export interface Habit {
    id: string
    userId: string
    name: string
    description?: string
    categoryId: string
    goalType: GoalType
    frequency: Frequency
    targetQuantity?: number
    unitOfMeasure?: string
    isAvoidance: boolean
    reminderTime?: string
    priority?: 'low' | 'medium' | 'high'
    startDate: Date
    endDate?: Date
    createdAt: Date
    updatedAt: Date
    isActive: boolean
}

// =============================
// 📈 Progress Tracking
// =============================

export interface HabitLog {
    id: string
    habitId: string
    userId: string
    date: Date
    completed: boolean
    quantityAchieved?: number
    mood?: string
    notes?: string
    skipped?: boolean
    loggedAt?: Date
    createdAt: Date
}

export interface ProgressSummary {
    habitId: string
    currentStreak: number
    longestStreak: number
    totalCompletionCount: number
    completionRate30Days: number
    averageQuantity?: number
    successRateAllTime?: number
    lastLogDate: Date
}

// =============================
// ⭐ Gamification & Rewards
// =============================

export interface Achievement {
    id: string
    name: string
    description: string
    criteria: string
    iconUrl: string
    type?: 'streak' | 'milestone' | 'challenge'
}

export interface UserAchievement {
    id: string
    userId: string
    achievementId: string
    dateEarned: Date
}

export interface HabitCurrency {
    userId: string
    currentBalance: number
    lastEarningDate: Date
    lifetimeEarnings?: number
}

// =============================
// 🤝 Accountability & Social
// =============================

export interface Challenge {
    id: string
    name: string
    description: string
    targetHabitId?: string
    creatorId: string
    startDate: Date
    endDate: Date
    isPublic: boolean
    maxParticipants?: number
    status?: 'upcoming' | 'active' | 'completed'
}

export interface ChallengeParticipation {
    id: string
    challengeId: string
    userId: string
    progressScore: number
    joinedAt: Date
    completed?: boolean
    rank?: number
}
