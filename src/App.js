import React from 'react';
import DataTable from './DataTable';

const data = [
  {
    "id": 1,
    "existingType": "기존유형1",
    "requestType": "신청유형1",
    "submittedDocs": "제출서류1",
    "requestDate": "2023-01-10 09:00:00",
    "approvalStatus": "승인거부",
    "rejectionReason": "",
    "approvalDate": "2023-01-11 10:00:00",
    "manager": "관리자1"
  },
  {
    "id": 2,
    "existingType": "기존유형2",
    "requestType": "신청유형2",
    "submittedDocs": "제출서류2",
    "requestDate": "2023-01-12 09:00:00",
    "approvalStatus": "승인완료",
    "rejectionReason": "",
    "approvalDate": "2023-01-13 11:00:00",
    "manager": "관리자2"
  },
  
  {
    "id": 3,
    "existingType": "기존유형1",
    "requestType": "신청유형1",
    "submittedDocs": "제출서류1",
    "requestDate": "2023-01-10 09:00:00",
    "approvalStatus": "승인대기",
    "rejectionReason": "",
    "approvalDate": "2023-01-11 10:00:00",
    "manager": "관리자1"
  },
  {
    "id": 4,
    "existingType": "기존유형2",
    "requestType": "신청유형2",
    "submittedDocs": "제출서류2",
    "requestDate": "2023-01-12 09:00:00",
    "approvalStatus": "승인대기",
    "rejectionReason": "",
    "approvalDate": "2023-01-13 11:00:00",
    "manager": "관리자2"
  },
  {
    "id": 5,
    "existingType": "기존유형1",
    "requestType": "신청유형1",
    "submittedDocs": "제출서류1",
    "requestDate": "2023-01-10 09:00:00",
    "approvalStatus": "승인거부",
    "rejectionReason": "",
    "approvalDate": "2023-01-11 10:00:00",
    "manager": "관리자1"
  },
  {
    "id": 6,
    "existingType": "기존유형2",
    "requestType": "신청유형2",
    "submittedDocs": "제출서류2",
    "requestDate": "2023-01-12 09:00:00",
    "approvalStatus": "승인완료",
    "rejectionReason": "",
    "approvalDate": "2023-01-13 11:00:00",
    "manager": "관리자2"
  },
  {
    "id": 7,
    "existingType": "기존유형1",
    "requestType": "신청유형1",
    "submittedDocs": "제출서류1",
    "requestDate": "2023-01-10 09:00:00",
    "approvalStatus": "승인거부",
    "rejectionReason": "",
    "approvalDate": "2023-01-11 10:00:00",
    "manager": "관리자1"
  },
  {
    "id": 8,
    "existingType": "기존유형2",
    "requestType": "신청유형2",
    "submittedDocs": "제출서류2",
    "requestDate": "2023-01-12 09:00:00",
    "approvalStatus": "승인완료",
    "rejectionReason": "",
    "approvalDate": "2023-01-13 11:00:00",
    "manager": "관리자2"
  },
  
  {
    "id": 9,
    "existingType": "기존유형1",
    "requestType": "신청유형1",
    "submittedDocs": "제출서류1",
    "requestDate": "2023-01-10 09:00:00",
    "approvalStatus": "승인대기",
    "rejectionReason": "",
    "approvalDate": "2023-01-11 10:00:00",
    "manager": "관리자1"
  },
  {
    "id": 10,
    "existingType": "기존유형2",
    "requestType": "신청유형2",
    "submittedDocs": "제출서류2",
    "requestDate": "2023-01-12 09:00:00",
    "approvalStatus": "승인대기",
    "rejectionReason": "",
    "approvalDate": "2023-01-13 11:00:00",
    "manager": "관리자2"
  },
  {
    "id": 11,
    "existingType": "기존유형1",
    "requestType": "신청유형1",
    "submittedDocs": "제출서류1",
    "requestDate": "2023-01-10 09:00:00",
    "approvalStatus": "승인거부",
    "rejectionReason": "",
    "approvalDate": "2023-01-11 10:00:00",
    "manager": "관리자1"
  },
  {
    "id": 12,
    "existingType": "기존유형2",
    "requestType": "신청유형2",
    "submittedDocs": "제출서류2",
    "requestDate": "2023-01-12 09:00:00",
    "approvalStatus": "승인완료",
    "rejectionReason": "",
    "approvalDate": "2023-01-13 11:00:00",
    "manager": "관리자2"
  },
  
  {
    "id": 13,
    "existingType": "기존유형1",
    "requestType": "신청유형1",
    "submittedDocs": "제출서류1",
    "requestDate": "2023-01-10 09:00:00",
    "approvalStatus": "승인거부",
    "rejectionReason": "",
    "approvalDate": "2023-01-11 10:00:00",
    "manager": "관리자1"
  },
  {
    "id": 14,
    "existingType": "기존유형2",
    "requestType": "신청유형2",
    "submittedDocs": "제출서류2",
    "requestDate": "2023-01-12 09:00:00",
    "approvalStatus": "승인완료",
    "rejectionReason": "",
    "approvalDate": "2023-01-13 11:00:00",
    "manager": "관리자2"
  },
  
  {
    "id": 15,
    "existingType": "기존유형1",
    "requestType": "신청유형1",
    "submittedDocs": "제출서류1",
    "requestDate": "2023-01-10 09:00:00",
    "approvalStatus": "승인대기",
    "rejectionReason": "",
    "approvalDate": "2023-01-11 10:00:00",
    "manager": "관리자1"
  },
  {
    "id": 16,
    "existingType": "기존유형2",
    "requestType": "신청유형2",
    "submittedDocs": "제출서류2",
    "requestDate": "2023-01-12 09:00:00",
    "approvalStatus": "승인대기",
    "rejectionReason": "",
    "approvalDate": "2023-01-13 11:00:00",
    "manager": "관리자2"
  },
  {
    "id": 17,
    "existingType": "기존유형1",
    "requestType": "신청유형1",
    "submittedDocs": "제출서류1",
    "requestDate": "2023-01-10 09:00:00",
    "approvalStatus": "승인거부",
    "rejectionReason": "",
    "approvalDate": "2023-01-11 10:00:00",
    "manager": "관리자1"
  },
  {
    "id": 18,
    "existingType": "기존유형2",
    "requestType": "신청유형2",
    "submittedDocs": "제출서류2",
    "requestDate": "2023-01-12 09:00:00",
    "approvalStatus": "승인완료",
    "rejectionReason": "",
    "approvalDate": "2023-01-13 11:00:00",
    "manager": "관리자2"
  },
  {
    "id": 19,
    "existingType": "기존유형1",
    "requestType": "신청유형1",
    "submittedDocs": "제출서류1",
    "requestDate": "2023-01-10 09:00:00",
    "approvalStatus": "승인거부",
    "rejectionReason": "",
    "approvalDate": "2023-01-11 10:00:00",
    "manager": "관리자1"
  },
  {
    "id": 20,
    "existingType": "기존유형2",
    "requestType": "신청유형2",
    "submittedDocs": "제출서류2",
    "requestDate": "2023-01-12 09:00:00",
    "approvalStatus": "승인완료",
    "rejectionReason": "",
    "approvalDate": "2023-01-13 11:00:00",
    "manager": "관리자2"
  },
  
  {
    "id": 21,
    "existingType": "기존유형1",
    "requestType": "신청유형1",
    "submittedDocs": "제출서류1",
    "requestDate": "2023-01-10 09:00:00",
    "approvalStatus": "승인대기",
    "rejectionReason": "",
    "approvalDate": "2023-01-11 10:00:00",
    "manager": "관리자1"
  },
  {
    "id": 22,
    "existingType": "기존유형2",
    "requestType": "신청유형2",
    "submittedDocs": "제출서류2",
    "requestDate": "2023-01-12 09:00:00",
    "approvalStatus": "승인대기",
    "rejectionReason": "",
    "approvalDate": "2023-01-13 11:00:00",
    "manager": "관리자2"
  },
  {
    "id": 23,
    "existingType": "기존유형1",
    "requestType": "신청유형1",
    "submittedDocs": "제출서류1",
    "requestDate": "2023-01-10 09:00:00",
    "approvalStatus": "승인거부",
    "rejectionReason": "",
    "approvalDate": "2023-01-11 10:00:00",
    "manager": "관리자1"
  },
  {
    "id": 24,
    "existingType": "기존유형2",
    "requestType": "신청유형2",
    "submittedDocs": "제출서류2",
    "requestDate": "2023-01-12 09:00:00",
    "approvalStatus": "승인완료",
    "rejectionReason": "",
    "approvalDate": "2023-01-13 11:00:00",
    "manager": "관리자2"
  },
]
;

function App() {
  return (
    <div className="App">
    <DataTable initialData={data} />
  </div>
  );
}

export default App;
