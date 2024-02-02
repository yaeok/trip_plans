import { doc, getDoc } from 'firebase/firestore';

import { db } from '@/lib/config';
import { User } from '@/models/user.model';

export const getProfileByUid = async (uid: string): Promise<User> => {
  const userDoc = doc(db, 'users', uid)
  const userSnap = await getDoc(userDoc).then((doc) => {
    if (doc.exists()) {
      const user: User = {
        uid: doc.id,
        username: doc.data().username,
        createdAt: doc.data().createdAt.toDate(),
        updatedAt: doc.data().updatedAt.toDate(),
        deletedAt: doc.data().deletedAt.toDate(),
      }
      return user
    } else {
      throw new Error('ユーザが見つかりませんでした')
    }
  })
  return userSnap
}
