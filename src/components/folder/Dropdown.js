import React, { useState, Fragment } from "react";
import styled from "styled-components";
import { Icon, Popconfirm } from "antd";

const DropdownIcon = styled(Icon)`
  right: -2px;
  top: 2px;
  position: absolute;
  font-size: 0.8rem;
  z-index: 1;
`;

const DropdownContent = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    position: absolute;
    background: #e8e8e8;
    padding: 2px 10px;
    right: 0;
    left: 0;
    top: 0;
    & > * {
      margin: 1px;
    }
  }
`;

const Dropdown = ({ updateItem, deleteItem }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleRename = () => {
    updateItem();
    setShowDropdown(false);
  };

  const handleDelete = () => {
    deleteItem();
    setShowDropdown(false);
  };

  const handleDropdownClick = event => {
    event.stopPropagation();
    setShowDropdown(prevState => !prevState);
  };

  return (
    <Fragment>
      <DropdownIcon type="more" onClick={handleDropdownClick} />
      {showDropdown && (
        <DropdownContent onClick={event => event.stopPropagation()}>
          <Icon onClick={handleRename} type="edit" />
          <Popconfirm
            title="Delete?"
            onConfirm={handleDelete}
            placement="right"
            okText="Yes"
            cancelText="No"
          >
            <Icon type="delete" />
          </Popconfirm>
        </DropdownContent>
      )}
    </Fragment>
  );
};

export default Dropdown;
