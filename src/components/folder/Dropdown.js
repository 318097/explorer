import React, { useState, useEffect, useRef, Fragment } from "react";
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
    width: 80%;
    flex-direction: column;
    padding: 2px;
    font-size: .7rem;
    position: absolute;
    background: white;
    border: 1px solid lightgrey;
    border-radius: 3px;
    right: 2px;
    top: 15px;
    & > * {
      margin: 2px 1px;
      padding: 1px;
      &:hover{
        background: lightgrey;
      }
    }
  }
`;

const Dropdown = ({ renameFolder, handleDelete }) => {
  const dropdownRef = useRef(null);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [showDropdown]);

  const handleClickOutside = event => {
    if (showDropdown) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target))
        setShowDropdown(false);
    }
  };

  const handleRename = () => {
    setShowDropdown(false);
    renameFolder();
  };

  const handleDeleteConfirm = () => {
    handleDelete();
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
        <DropdownContent
          ref={dropdownRef}
          onClick={event => event.stopPropagation()}
        >
          <span>
            <Icon onClick={handleRename} type="edit" />
            Rename
          </span>
          <Popconfirm
            title="Delete?"
            onConfirm={handleDeleteConfirm}
            placement="right"
            okText="Yes"
            cancelText="No"
          >
            <span>
              <Icon type="delete" />
              Delete
            </span>
          </Popconfirm>
        </DropdownContent>
      )}
    </Fragment>
  );
};

export default Dropdown;
