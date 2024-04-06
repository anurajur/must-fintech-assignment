import React, { useState, useMemo } from 'react';
import './DataTable.css';
import Pagination from './Pagination';

const DataTable = ({ initialData }) => {
    const [data, setData] = useState(initialData);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('');
    const [memberTypeFilter, setMemberTypeFilter] = useState('');
    const [selection, setSelection] = useState('');
    // useMemo to create a filtered version of the data based on the search term and filters
    const filteredData = useMemo(() => {
        return data.filter(item => {
            const searchCondition = searchTerm ? Object.values(item).some(value =>
                String(value).toLowerCase().includes(searchTerm.toLowerCase())
            ) : true;

            const statusCondition = statusFilter ? item.status === statusFilter : true;
            const memberTypeCondition = memberTypeFilter ? item.memberType === memberTypeFilter : true;

            return searchCondition && statusCondition && memberTypeCondition;
        });
    }, [data, searchTerm, statusFilter, memberTypeFilter]);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    // Handle page change
    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const Dropdown = ({ options, defaultValue, onChange }) => (
        <select
            defaultValue={defaultValue}
            onChange={onChange}
            className="actionDropdown"
        >
            {options.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
            ))}
        </select>
    );

    const getStatusStyles = (status) => {
        let styles = {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            padding: '2px 10px',
            gap: '6px',
            position: 'relative', // Note: 'absolute' might not make sense here unless the layout specifically requires it.
            top: '27.27%', // "
            bottom: '27.27%', // "
            borderRadius: '10px'
        };

        switch (status) {
            case '승인완료':
                styles = { ...styles, background: '#DCFCE7', color: '#166534' };
                break;
            case '승인대기':
                styles = { ...styles, background: '#FFEDD5', color: '#9A3412' };
                break;
            case '승인거부':
                styles = { ...styles, background: '#FEE2E2', color: '#991B1B' };
                break;
            default:
                break;
        }

        return styles;
    };

    const SubHeader = ({ totalCount, pendingCount }) => {
        const [statusFilter, setStatusFilter] = useState('all');
        const [sortOrder, setSortOrder] = useState('timestamp');
        const [itemsPerPage, setItemsPerPage] = useState(50);

        return (
            <div className="sub-header">
                <div className="left-section">
                    신청 목록(총 {totalCount}명 | 승인대기 {pendingCount}건)
                </div>
                <div className="right-section">
                    <Dropdown
                        options={[
                            { value: 'all', label: '승인여부 전체' },
                            { value: 'pending', label: '승인대기' },
                            { value: 'approved', label: '승인완료' },
                            { value: 'rejected', label: '승인거부' },
                        ]}
                        defaultValue={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                    />
                    <Dropdown
                        options={[

                            { value: 'requestDate', label: '신청일시순' },
                            { value: 'approvalDate', label: '승인일시순' },
                        ]}
                        defaultValue={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
                    />

                    <Dropdown
                        options={[
                            { value: '10', label: '10개씩 보기' },
                            { value: '20', label: '20개씩 보기' },
                            { value: '50', label: '50개씩 보기' },
                            // ... other items per page options ...
                        ]}
                        defaultValue={itemsPerPage.toString()}
                        onChange={(e) => setItemsPerPage(e.target.value)}
                    />
                </div>
            </div>
        );
    };


    const handleSelectionChange = (e) => {
        setSelection(e.target.value);
    };


    return (
        <>
            <div className="outer-header-container">
                <div class="header">
                    <h1>투자상품</h1>
                    <div><div class="status-dot"></div>
                        <span style={{ color: "red" }}>투자상품</span></div>
                </div>
                <div className="horizontal-line"></div>
                <ul className="dataTableMainHeader">
                    <li>기본정보 관리</li>
                    <li>투자정보 관리</li>
                    <li>입출금내역 조회</li>
                    <li>영업내역 조회</li>
                    <li>투자내역 조회</li>
                    <li>체결내역 조회</li>
                    <li>SMS 관리</li>
                    <li>상담내역 관리</li>
                    <li>1:1문의내역 조회</li>
                </ul>
                <SubHeader totalCount={100} pendingCount={1} />
                <div className="horizontal-line"></div>

            </div>
            <div className="data-table-container">
                <table>
                    <thead>
                        <tr>
                            <th>NO</th>
                            <th>기존유형</th>
                            <th>신청유형</th>
                            <th>제출서류</th>
                            <th>신청일시</th>
                            <th>승인여부</th>
                            <th>승인거부 사유</th>
                            <th>승인일시</th>
                            <th>관리자</th>
                        </tr>
                    </thead>
                    <tbody>
                        {initialData.map((row, index) => (
                            <tr key={index}>
                                <td>{row.id}</td>
                                <td>{row.existingType}</td>
                                <td>{row.requestType}</td>
                                <td>{row.submittedDocs}</td>
                                <td>{row.requestDate}</td>
                                <td style={getStatusStyles(row.approvalStatus)}>{row.approvalStatus}</td>                                <td>{row.rejectionReason}</td>
                                <td>{row.approvalDate}</td>
                                <td>{row.manager}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
               
            </div>

            <Pagination pages={20} currentPage={currentPage} onPageChange={handlePageClick} />


        </>
    );
};

export default DataTable;
