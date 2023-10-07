import React from "react"
import ContentLoader from "react-content-loader"

const SkeletonCategory = () => (
  <ContentLoader 
    speed={2}
    width={510}
    height={60}
    viewBox="0 0 510 60"
    backgroundColor="#8585AD"
    foregroundColor="#b1aeae"
  >
    <rect x="1" y="45" rx="0" ry="0" width="509" height="3" /> 
    <rect x="32" y="11" rx="9" ry="9" width="61" height="26" /> 
    <rect x="417" y="11" rx="9" ry="9" width="61" height="26" /> 
    <rect x="159" y="11" rx="9" ry="9" width="61" height="26" /> 
    <rect x="289" y="11" rx="9" ry="9" width="61" height="26" />
  </ContentLoader>
)

export default SkeletonCategory