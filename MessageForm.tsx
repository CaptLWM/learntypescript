import React, {useEffect, useRef, useState} from 'react';
import {Button, TextInput, View, Text} from 'react-native';

function MessageForm() {
  // useState는 Generic 사용해서 타입 지정 가능 유추 가능할때는 생략 가능하지만
  // 유추할 수 없거나 여러타입을 지녔을 경우에는 반드시 설정
  const [text, setText] = useState<string>('');
  const [lastMessage, setLastMessage] = useState<{
    message: string;
    date: Date;
  } | null>(null);

  const nextId = useRef<number>(1);
  const inputRef = useRef<TextInput | null>(null);

  const onPress = () => {
    setLastMessage({
      message: text,
      date: new Date(),
    });
    setText('');
    nextId.current += 1;
  };

  useEffect(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.focus();
  }, []);

  return (
    <View>
      <TextInput value={text} onChangeText={setText} ref={inputRef} />
      <Button title="Press Me" onPress={onPress} />
      {lastMessage && (
        <View>
          <Text>
            마지막 메세지:{lastMessage.message} (
            {lastMessage.date.toLocaleString()})
          </Text>
        </View>
      )}
    </View>
  );
}

export default MessageForm;
