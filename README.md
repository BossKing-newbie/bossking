# bossking
属于Boss_king的代码项目
#2019/09/03 纪念第一次使用github 
I hope this is not my last enter!
Today I study mysql should know and should understand!
记录今天的mysql应知应会的知识点！
第一章 菜鸟篇
 数据库：保存有组织的数据的内容。
 表：某种特定类型数据的结构化清单。
 使用数据库：use 数据库名;
 显示数据库信息: SHOW DATABASES;
 数据库内的列表：SHOW TABLES;
 show 也可以用来显示表列: SHOW Columns from 表名;
 select DISTINCT : 返回唯一值（筛除重复值）
 Limit 5,5 :指示从Mysql返回从第五行开始的五行，第一个数为开始位置，第二个数为要检索的行数。
 子句：order by (默认升序)ASC (降序)DESC.
 order by 字段 limit 1;返回最大值
 where子句的位置：order by 和 where 子句，order by 位于 where 之后.
 不匹配检查: <> 和 !=
 Between and :指定开始值和结束值。
 空值检查：where 字段 is null
 IN操作符：比or操作符更快.
 not操作符：一般配合IN操作符 NOT IN
 通配符进行过滤: LIKE操作符,百分号%通配符:区分大小写！
 下划线(_)通配符：匹配单个字符。
