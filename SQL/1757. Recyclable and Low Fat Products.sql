-- 1757. Recyclable and Low Fat Products
-- https://leetcode.com/problems/recyclable-and-low-fat-products/
-- Tag: Easy, SELECT

SELECT product_id
FROM Products
WHERE low_fats = "Y" AND recyclable = "Y"