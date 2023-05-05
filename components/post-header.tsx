import styled from 'styled-components';
import Avatar from './avatar';
import Date from './date';
import CoverImage from './cover-image';
import PostTitle from './post-title';
import Categories from './categories';

const HeaderContainer = styled.div`
  margin: 0 auto;
`;
const PostHeaderContainer = styled.div`
  margin: 2rem 0;
`;


const PostHeader = ({ title, coverImage, date, author, categories }) => {
  return (
    <PostHeaderContainer>
      <PostTitle>{title}</PostTitle>
      {/* <div className="hidden md:block md:mb-12">
        <Avatar author={author} />
      </div> */}
      <HeaderContainer>
        <div>
          <CoverImage title={title} coverImage={coverImage} />
        </div>
        <div className="mb-6 text-lg">
          Posted <Date dateString={date} />
          <Categories categories={categories} />
        </div>
      </HeaderContainer>
    </PostHeaderContainer>
  );
};

export default PostHeader;
