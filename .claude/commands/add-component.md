---
description: React 함수형 컴포넌트를 src/components/ 폴더에 생성합니다
argument-hint: <컴포넌트 이름> (예: Button, Modal, UserCard)
---

`src/components/$ARGUMENTS.tsx` 파일을 아래 템플릿으로 생성해줘.

파일이 이미 존재하면 덮어쓰지 말고 사용자에게 알려줘.

템플릿:
```tsx
import React from 'react';

interface $ARGUMENTSProps {
  // props 타입 정의
}

const $ARGUMENTS: React.FC<$ARGUMENTSProps> = () => {
  return (
    <div className="">
      {/* $ARGUMENTS 컴포넌트 */}
    </div>
  );
};

export default $ARGUMENTS;
```

파일 생성 후 생성된 파일 경로를 알려줘.
