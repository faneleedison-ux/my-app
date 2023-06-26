import React from 'react';
import ChatBot from 'react-simple-chatbot';
import RoundedButtons from '../Buttons/RoundedButtons';
import Words from '../Home/Words';

function ChatbotApp() {
  return (
    <div className="Container">
      <RoundedButtons />
      <Words/>
      
      <ChatBot
        steps={[
          {
            id: '1',
            message: 'Hello, welcome to the South African Police Station. Have you been here before?',
            trigger: '2',
          },
          {
            id: '2',
            options: [
              { value: 1, label: 'No', trigger: '8' },
              { value: 2, label: 'Yes', trigger: '3' },
            ],
          },
          {
            id: '3',
            message: 'What is your case number?',
            trigger: '4',
          },
          {
            id: '4',
            options: [
              { value: 1, label: '001', trigger: '6' },
              { value: 2, label: 'I am not sure', trigger: '8' },
            ],
          },
          {
            id: '6',
            message: 'We cannot find your case folder. Do you want to start again?',
            trigger: '7',
          },
          {
            id: '7',
            options: [
              { value: 1, label: 'Start again', trigger: '1' },
              { value: 2, label: 'Quit', trigger: '11' },
            ],
          },
          {
            id: '8',
            message: 'Please share the details of the incident you want to report.',
            trigger: '9',
          },
          {
            id: '9',
            user: true,
            trigger: '10',
          },
          {
            id: '10',
            message: 'Sorry, I could not hear your story. Please share it again.',
            trigger: '9',
          },
          {
            id: '11',
            message: 'Goodbye! Thank you for visiting our station. We aim to keep you protected at all times.',
            end: true,
          },
        ]}
      />
    </div>
  );
}

export default ChatbotApp;
