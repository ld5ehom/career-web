import { atom } from "jotai";
import { type VideoType, type UserType } from "./types";

/**
 * Atom to store user information.
 * 사용자 정보를 저장하는 Atom
 */
export const userAtom = atom<UserType | null>(null);

/**
 * Atom to store a list of videos.
 * 비디오 목록을 저장하는 Atom
 */
export const videosAtom = atom<VideoType[]>([]);
