function LaboratoryExamination() {
  const Laboratory = [
    {
      id: 1,
      name: 'Test1',
      Date: '1-1-2000',
      image:
        'https://management.ind.in/img/a/ESIC-Medical-Lab-Technician-Exam-paper-5.jpg',
    },
    {
      id: 2,
      name: 'Test1',
      Date: '1-1-2000',
      image:
        'https://management.ind.in/img/a/ESIC-Medical-Lab-Technician-Exam-paper-5.jpg',
    },
    {
      id: 3,
      name: 'Test1',
      Date: '1-1-2000',
      image:
        'https://management.ind.in/img/a/ESIC-Medical-Lab-Technician-Exam-paper-5.jpg',
    },
    {
      id: 4,
      name: 'Test1',
      Date: '1-1-2000',
      image:
        'https://management.ind.in/img/a/ESIC-Medical-Lab-Technician-Exam-paper-5.jpg',
    },
    {
      id: 5,
      name: 'Test1',
      Date: '1-1-2000',
      image:
        'https://management.ind.in/img/a/ESIC-Medical-Lab-Technician-Exam-paper-5.jpg',
    },
  ];
  return (
    <div className="mt-10 min-h-screen p-4">
      <div className="mt-5 font-bold text-lg">Laboratory Examination</div>
      <div>
        {Laboratory.map((item) => {
          return (
            <div key={item.id}>
              <img
                src="https://management.ind.in/img/a/ESIC-Medical-Lab-Technician-Exam-paper-2.jpg"
                alt="test paper"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default LaboratoryExamination;
